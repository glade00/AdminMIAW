import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientItemComponent } from './shared/client-item/client-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ClientsService } from './services/clients.service';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { TokenStorageService } from './services/token-storage.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/app.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ClientsComponent,
        SkillsComponent,
        ClientItemComponent,
        ClientFormComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
        TokenStorageService



    ],
    providers: [
        ClientsService,
        UserService,
        TokenStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true,
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
