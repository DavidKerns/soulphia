import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
let currentTime = new Date(new Date().getTime()).toLocaleTimeString();
$('.theButton').on('click', () => {
  let message = $('#message-to-send').val();
  $('.chat-history > ul').append(
    `
    <li class="clearfix">
      <div class="message-data align-right" style="padding-left: 163px;">
        <span class="message-data-time" >${currentTime}, Today</span> &nbsp; &nbsp;
        <span class="message-data-name" >Dianelis</span>

      </div>
      <div class="message other-message float-right"
      style="
    background:#94C2ED;
    color: white;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    margin-bottom: 30px;
    width: 90%;
    position: relative;
      ">
        ${message}
      </div>
    </li>
    `
  );
  $('#message-to-send').val("");

}
);

}}
