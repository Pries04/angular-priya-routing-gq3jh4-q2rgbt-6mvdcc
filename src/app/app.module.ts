import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AdminComponent } from './admin/admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { CatalogUserComponent } from './user/catalog/catalog.component';
import { LoginUserComponent } from './user/login/login.component';
import { HomeUserComponent } from './user/home/home.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, UserComponent,AdminComponent, CatalogUserComponent, HomeUserComponent,LoginUserComponent ],
  bootstrap:    [ AppComponent, UserComponent,AdminComponent, CatalogUserComponent, HomeUserComponent,LoginUserComponent ]
})
export class AppModule { }
