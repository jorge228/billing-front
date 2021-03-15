import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ClientCreateUpdateComponent } from './client/client-create-update/client-create-update.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'clients', component: ClientComponent, data: { title: 'Clients' } },
            { path: 'client/create', component: ClientCreateUpdateComponent, data: { title: 'Create Client' } },
            { path: 'client/update/:id', component: ClientCreateUpdateComponent, data: { title: 'Update Client' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Settings' } },
        ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
