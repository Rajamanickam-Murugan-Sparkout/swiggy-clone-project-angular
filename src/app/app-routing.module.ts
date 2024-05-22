import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRestaurantComponent } from './Body/top-restaurant/top-restaurant.component';
import { PizzaHutComponent } from './Body/restaurants/pizza-hut/pizza-hut.component';
import { BarbequeComponent } from './Body/restaurants/barbeque/barbeque.component';
import { BluemoonComponent } from './Body/restaurants/bluemoon/bluemoon.component';
import { GuptaComponent } from './Body/restaurants/gupta/gupta.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'', component: TopRestaurantComponent},
  {path:'pizza-hut', component: PizzaHutComponent},
  {path:'barbeque', component: BarbequeComponent},
  {path:'bluemoon', component: BluemoonComponent},
  {path:'gupta', component: GuptaComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
