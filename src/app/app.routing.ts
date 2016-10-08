import { Routes, RouterModule } from '@angular/router';


import { RestaurantLoginComponent } from './restaurant/restaurant-login.component';
import { MenuAddComponent } from './restaurant/menu-add.component';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant/login',
    component: RestaurantLoginComponent
  },
  {
    path: 'restaurant/menu/:type',
    component: MenuAddComponent
  },
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
     path: 'users',
     component: UsersComponent
  },
  {
    path: 'users/new',
    component: UserFormComponent
  },
  {
    path: 'users/:id',
    component: UserFormComponent
  },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  , { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, UserFormComponent, NotFoundComponent, PostsComponent];
