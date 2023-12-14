import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthOutletComponent } from './component/auth-outlet/auth-outlet.component';
import { AuthRoutingModule } from './router/auth-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthHeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [AuthOutletComponent, SignInComponent, AuthHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule {}
