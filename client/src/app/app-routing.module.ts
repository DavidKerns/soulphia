import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ChatComponent } from './chat/chat.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'availableusers',
    component: OnlineUsersComponent
  },
  {
    path: 'profile/:id/edit',
    component: ProfileEditComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'userrole',
    component: UserRoleComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
