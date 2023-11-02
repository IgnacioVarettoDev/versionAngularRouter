import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2LoginComponent } from './v2-login/v2-login.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: V2LoginComponent },
      { path: '**', component: OtherComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V2RoutingModule {}
