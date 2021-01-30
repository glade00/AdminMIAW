import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
    {
        path: 'competences',
        canActivate: [AuthenticationGuard],
        component: SkillsComponent
    },
    {
        path: 'clients',
        children: [
            {
                path: '',
                component: ClientsComponent
            },
            {
                path: 'nouveau',
                component: ClientFormComponent
            },
        ],
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'connexion',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
