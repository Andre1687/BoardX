import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

// Array of routes that point to a component or a module.
// 'dash' is loaded with lazyloading.
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'dash',
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=> m.DashboardModule),
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
