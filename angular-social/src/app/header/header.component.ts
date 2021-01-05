import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // activeId = 1;
  @Input()
  public isAuthenticated: boolean;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    alert("You're safely logged out!");
    this.router.navigate(['/']);
  }

}
