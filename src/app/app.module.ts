import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './services/auth/token.interceptor'
import { ThemeService } from './services/theme.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HeaderLayoutComponent } from './components/layouts/header-layout/header-layout.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResetComponent } from './components/reset/reset.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadsComponent } from './components/leads/leads.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { StructureComponent } from './components/structure/structure.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { ManagementsComponent } from './components/managements/managements.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { QuotesComponent } from './components/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    DashboardComponent,
    MainLayoutComponent,
    HeaderLayoutComponent,
    LoginComponent,
    NotFoundComponent,
    ResetComponent,
    AdministratorComponent,
    ProfileComponent,
    SideNavComponent,
    ToolbarComponent,
    LeadsComponent,
    CustomersComponent,
    ContactsComponent,
    StructureComponent,
    SellersComponent,
    ProyectsComponent,
    OpportunitiesComponent,
    ManagementsComponent,
    ActivitiesComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ThemeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
