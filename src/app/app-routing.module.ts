import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PoliciesComponent } from './policies/policies.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { PurchasHistoryComponent } from './purchas-history/purchas-history.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'policies',
    component: PoliciesComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'soldPolicies',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart/:id',
    component: CartComponent
  },
  {
    path: 'MyPurchase',
    component: PurchasHistoryComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'search/:query',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
