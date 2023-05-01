import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserGuard } from './user.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', canActivate:[LoggedGuard], component: AboutComponent},
  { path: 'login', canActivate:[LoggedGuard], component: LoginComponent},
  { path: 'dashboard', canActivate:[UserGuard], component: DashboardComponent},
  { path: 'gallery', canActivate:[UserGuard], component: GalleryComponent},
  { path: 'crud', canActivate:[UserGuard], component: CrudComponent},
  { path: 'profile', canActivate:[UserGuard], component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
