import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // routeData: Data;
  currentUser: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    // this.route.data.subscribe(data => this.routeData = data);
  }

}
