import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  // showDetail() {
  //   this.router.navigate(['/users', { outlets: { admin: ['admin', '1'] } }]);
  // }
}