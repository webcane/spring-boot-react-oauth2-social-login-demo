import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faGithub = faGithub;
  faSignInAlt = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
