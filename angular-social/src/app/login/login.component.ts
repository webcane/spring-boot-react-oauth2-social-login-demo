import {Component, OnInit} from '@angular/core';
// import { environment } from '@environments/environment';
import {environment} from '../../environments/environment';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faGithub = faGithub;
  faSignInAlt = faSignInAlt;

  GITHUB_AUTH_URL = environment.githubAuthUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
