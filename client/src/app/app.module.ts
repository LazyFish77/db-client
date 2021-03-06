import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MatRadioModule } from '@angular/material/radio';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatInputModule } from '@angular/material/input';
import { AuthorizationService } from './authorization.service';
import { AuthGuardService } from './auth-guard.service';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { MatSelectModule } from '@angular/material/select';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AdminComponent,
        PageNotFoundComponent,
        NavPanelComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        NoopAnimationsModule
    ],
    providers: [
        HttpService,
        AuthorizationService,
        AuthGuardService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
