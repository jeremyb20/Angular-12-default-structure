import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './common/guards/admin/admin-guard.guard';
import { AuthGuard } from './common/guards/auth/auth-guard.guard';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { HeaderLayoutComponent } from './components/layouts/header-layout/header-layout.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementsComponent } from './components/managements/managements.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ResetComponent } from './components/reset/reset.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { StructureComponent } from './components/structure/structure.component';

const routes: Routes = [
  {
    path:'',
    component: HeaderLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'reset', component: ResetComponent },
      { path: 'forgot', component: ForgotComponent }
    ]
  },
  {
    path: '',
    canActivate: [AdminGuard],
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', component: AdministratorComponent},
      { path: 'permissions', component: PermissionsComponent}
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'structure', component: StructureComponent },
      { path: 'sellers', component: SellersComponent },
      { path: 'proyects', component: ProyectsComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'managements', component: ManagementsComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'quotes', component: QuotesComponent }
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
