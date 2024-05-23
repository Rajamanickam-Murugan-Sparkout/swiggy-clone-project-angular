import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { TopRestaurantComponent } from './Body/top-restaurant/top-restaurant.component';
import { PizzaHutComponent } from './Body/restaurants/pizza-hut/pizza-hut.component';
import { BarbequeComponent } from './Body/restaurants/barbeque/barbeque.component';
import { BluemoonComponent } from './Body/restaurants/bluemoon/bluemoon.component';
import { GuptaComponent } from './Body/restaurants/gupta/gupta.component';
import { AddToCartComponent } from './Body/cart/add-to-cart/add-to-cart.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopRestaurantComponent,
    PizzaHutComponent,
    BarbequeComponent,
    BluemoonComponent,
    GuptaComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
