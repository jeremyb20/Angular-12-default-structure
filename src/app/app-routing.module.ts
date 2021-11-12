import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './common/guards/admin/admin-guard.guard';
import { AuthGuard } from './common/guards/auth/auth-guard.guard';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderLayoutComponent } from './components/layouts/header-layout/header-layout.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementsComponent } from './components/managements/managements.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
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
      { path: 'reset', component: ResetComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'admin', component: AdministratorComponent, canActivate: [AdminGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'leads', component: LeadsComponent, canActivate: [AuthGuard] },
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
      { path: 'structure', component: StructureComponent, canActivate: [AuthGuard] },
      { path: 'sellers', component: SellersComponent, canActivate: [AuthGuard] },
      { path: 'proyects', component: ProyectsComponent, canActivate: [AuthGuard] },
      { path: 'opportunities', component: OpportunitiesComponent, canActivate: [AuthGuard] },
      { path: 'managements', component: ManagementsComponent, canActivate: [AuthGuard] },
      { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] },
      { path: 'quotes', component: QuotesComponent, canActivate: [AuthGuard] },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
