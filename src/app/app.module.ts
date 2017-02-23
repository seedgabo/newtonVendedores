import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProductoPage } from '../pages/producto/producto';
import { ClientesPage } from '../pages/clientes/clientes';
import { ProfilePage } from '../pages/profile/profile';
import {PedidoPage} from '../pages/pedido/pedido';
import { LoginPage } from '../pages/login/login';
import {Api} from '../providers/api';
import { Storage } from '@ionic/storage';
import {MomentModule} from 'angular2-moment';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
@NgModule({
  declarations: [
    MyApp,
    Home,
    Page2,
    ProductoPage,
    ClientesPage,
    ProfilePage,
    LoginPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    Ng2FilterPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Page2,
    ProductoPage,
    ClientesPage,
    ProfilePage,
    LoginPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Api,Storage]
})
export class AppModule {}
