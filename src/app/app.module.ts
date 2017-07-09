import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProductoPage } from '../pages/producto/producto';
import { ClientesPage } from '../pages/clientes/clientes';
import { ProfilePage } from '../pages/profile/profile';
import { PedidoPage } from '../pages/pedido/pedido';
import { LoginPage } from '../pages/login/login';
import { Api } from '../providers/api';


import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { PedidosPage } from "../pages/pedidos/pedidos";
@NgModule({
  declarations: [
    MyApp,
    Home,
    Page2,
    ProductoPage,
    ClientesPage,
    ProfilePage,
    LoginPage,
    PedidosPage,
    PedidoPage
  ],
  bootstrap: [IonicApp],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    Ng2FilterPipeModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  entryComponents: [
    MyApp,
    Home,
    Page2,
    ProductoPage,
    ClientesPage,
    ProfilePage,
    LoginPage,
    PedidosPage,
    PedidoPage
  ],
  providers: [
    StatusBar, SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    , Api,]
})
export class AppModule { }
