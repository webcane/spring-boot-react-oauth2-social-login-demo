import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faGithub = faGithub;
  faSignInAlt = faSignInAlt;

  GITHUB_AUTH_URL = environment.githubAuthUrl;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.userService.login(val.email, val.password)
        .subscribe(s => {
            console.log("User is logged in");
            let token = s.accessToken;
            if (token != null) {
              this.authService.setToken(token);
              console.log('Obtained Access token');
              this.router.navigate(['/profile']);
            }
            // this.router.navigateByUrl('/');
          },
          e => {
            alert("Error during login: " + e.message);
          }
        );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
