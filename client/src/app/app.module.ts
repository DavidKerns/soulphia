
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ChatService } from './services/chat.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomepageComponent,
    ProfileComponent,
    UserRoleComponent,
    UserEditComponent,
    ProfileEditComponent,
    NavbarComponent,
    VideoChatComponent,
    ChatComponent,
    OnlineUsersComponent,
    MessagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    UserService,
		ChatService



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
