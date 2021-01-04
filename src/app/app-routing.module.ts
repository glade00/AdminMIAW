import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'competences',
    component: SkillsComponent

  },
  {
    path: 'clients',
    component: ClientsComponent
  }
  ,
  {
    path: 'dashboard',
    component: DashboardComponent

  }

];


@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule {

}
