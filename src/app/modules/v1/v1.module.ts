import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V1RoutingModule } from './v1-routing.module';
import { V1LoginComponent } from './v1-login/v1-login.component';
import { OtherComponent } from './other/other.component';


@NgModule({
  declarations: [
    V1LoginComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    V1RoutingModule
  ],
  providers:[
    
  ]
})
export class V1Module { }
