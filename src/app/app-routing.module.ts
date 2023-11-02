import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionComponent } from './component/version/version.component';

const routes: Routes = [
  { path: '', redirectTo: 'version', pathMatch: 'full' },
  { path: 'version', component: VersionComponent },
  {
    path: 'v1',
    loadChildren: () =>
      import('./modules/v1/v1.module').then((m) => m.V1Module),
  },
  {
    path: 'v2',
    loadChildren: () =>
      import('./modules/v2/v2.module').then((m) => m.V2Module),
  },
  { path: '**', redirectTo: 'version' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
