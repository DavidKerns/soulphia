import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  providers : []
})
export class  ChatComponent implements OnInit  {

  messages = [];
  connection;
  message;
  constructor() {}


  ngOnInit() {

  }
}
