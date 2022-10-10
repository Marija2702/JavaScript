import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

//registration of the components and their routes.

const routes: Routes = [
  {component: LoginPanelComponent, path: 'login-panel'},
  {component: WarehouseComponent, path: 'warehouse',
  children: [{
    component: WarehouseComponent, path: ':id'
  }]
},

  {component: AnalyticsComponent, path: 'analytics'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

