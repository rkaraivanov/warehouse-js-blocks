import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderService } from "./order-service/order-service";
import { BoardComponent } from "./board-component/board-component";
import { OrderDetailComponent } from "./order-component/order-component";
import { NewOrderComponent } from "./neworder-component/neworder-component";
import { ScanComponent } from "./scan-component/scan-component";
import { SplashScreenComponent } from "./splashscreen-component/splashscreen.component";

import { IgxComponentsModule, IgxDirectivesModule } from "igniteui-js-blocks/main";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    OrderDetailComponent,
    NewOrderComponent,
    ScanComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    IgxDirectivesModule,
    IgxComponentsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BoardComponent
      },
      {
        path: 'splash',
        component: SplashScreenComponent
      },
      {
        path: 'detail/:id',
        component: OrderDetailComponent
      },
      {
        path: 'new',
        component: NewOrderComponent
      },
      {
        path: 'scan',
        component: ScanComponent
      }
    ])
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
