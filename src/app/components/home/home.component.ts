import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor() { 
    this.user = {
      userId: 123,
      streams: [
        {
        startTime: 12345400,
        endTime: 12345678,
        streamId: 1548,
        userId: 123
        },
        {
          startTime: 12367500,
          endTime: 12480848,
          streamId: 1550,
          userId: 123
        }
      ],
      display_name: 'hElLo',
      name: 'cats',
      logo: 'https://i.imgur.com/vgq0vMc.jpg'
    }
  }

  ngOnInit() {
  }

}
