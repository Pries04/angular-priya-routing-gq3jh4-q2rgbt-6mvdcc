import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogUserComponent } from './user/catalog/catalog.component';
import { HomeUserComponent } from './user/home/home.component';
import { LoginUserComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { Admin1Component } from './admin1/admin1.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: 'catalog', component: CatalogUserComponent },
      { path: 'home', component: HomeUserComponent },
      { path: 'login', component: LoginUserComponent }
    ]
  },
  {
    path: 'admin1',
    component : Admin1Component
  },
  {
    path: 'admin',
    component: AdminComponent,
    // loadChildren: './admin/admin.module#AdminModule'
  },
  // { path: '', redirectTo: '/user', pathMatch: 'full' }
];

// @NgModule({
//   declarations: [ 
//     LoginUserComponent, HomeUserComponent, CatalogUserComponent
//   ],
//   imports: [
//     RouterModule.forRoot([
//       { path: 'login', component: LoginUserComponent },
//       { path: 'home', component: HomeUserComponent },
//       { path: 'catalog', component: CatalogUserComponent },
//       {path: 'admin', loadChildren: AdminRoutingModule},
//       // { path: '', redirectTo: 'login' }
//     ])
//   ],
//   exports: [
//     RouterModule, AdminRoutingModule
//   ],
//   providers: [],

// })



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


