import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SubMenuComponent } from './warehouse/sub-menu/sub-menu.component';
import { DataViewComponent } from './warehouse/data-view/data-view.component';
import { TableComponent } from './warehouse/data-view/table/table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    WarehouseComponent,
    LoginPanelComponent,
    AnalyticsComponent,
    SubMenuComponent,
    DataViewComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
