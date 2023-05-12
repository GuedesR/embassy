import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';

import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientViewComponent } from './client/client-view/client-view.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
// import { TodoEditComponent } from './todo-edit/todo-edit.component';
// import { TodoViewComponent } from './todo-view/todo-view.component';

/**
 * MSAL Angular can protect routes in your application using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [
    /* {
        path: 'todo-edit/:id',
        component: TodoEditComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'todo-view',
        component: TodoViewComponent,
        canActivate: [
            MsalGuard
        ]
    }, */
    {
        path: 'client-list',
        component: ClientListComponent
    },
    {
        path: 'client-create',
        component: ClientCreateComponent
    },
    {
        path: 'client-view/:clientId',
        component: ClientViewComponent
    },
    {
        // Needed for handling redirect after login
        path: 'auth',
        component: MsalRedirectComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // Don't perform initial navigation in iframes or popups
        initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
