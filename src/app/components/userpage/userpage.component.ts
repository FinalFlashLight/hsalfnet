import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../classes/user';
import { UserservService } from './../../services/userserv/userserv.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private userServ: UserservService,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userServ.getUser(id);
  }

}
