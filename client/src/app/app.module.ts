
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
	import { FormControl } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ClassesService } from './services/classes.service';
import { UserService } from './services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { NotFoundComponent } from './not-found/not-found.component';
import { ClassesComponent } from './classes/classes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { ChatComponent } from './chat/chat.component';
import { OnlineUsersComponent } from './online-users/online-users.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ClassesComponent,
    HomepageComponent,
    ProfileComponent,
    UserRoleComponent,
    UserEditComponent,
    ProfileEditComponent,
    NavbarComponent,
    VideoChatComponent,
    ChatComponent,
    OnlineUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
		 SocketIoModule.forRoot(config)

  ],
  providers: [
    AuthService,
    ClassesService,
    UserService,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
