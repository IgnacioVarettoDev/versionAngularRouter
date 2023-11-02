import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1LoginComponent } from './v1-login/v1-login.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: V1LoginComponent },
      { path: '**', component: OtherComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V1RoutingModule {}
