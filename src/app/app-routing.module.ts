import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent} from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component'
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  { path: 'Home-component', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'UserDetailsComponent', component: UserDetailsComponent },
  { path: 'Login-component', component: LoginComponent },
  { path: 'navbar-component', component: NavbarComponent },
  { path: '', redirectTo:'/Home-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
