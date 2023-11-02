import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2RoutingModule } from './v2-routing.module';
import { V2LoginComponent } from './v2-login/v2-login.component';
import { OtherComponent } from './other/other.component';


@NgModule({
  declarations: [
    V2LoginComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    V2RoutingModule
  ]
})
export class V2Module { }
