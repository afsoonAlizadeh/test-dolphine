import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOutletComponent } from '../component/auth-outlet/auth-outlet.component';
import { SignInComponent } from '../component/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthOutletComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-in',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
