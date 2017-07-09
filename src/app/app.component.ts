import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Home } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
// import { ClientesPage } from '../pages/clientes/clientes';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { Api } from '../providers/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  active: any;
  pages: Array<{ title: string, component: any, icon: string }>;
  pagesOptions: Array<{ title: string, component: any, icon: string }>;
  constructor(public platform: Platform, public api: Api, public statusbar: StatusBar, public splashscreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Productos', component: Home, icon: "home" },
      { title: 'Carrito', component: Page2, icon: "cart" },
      // { title: 'Clientes', component: ClientesPage, icon: "people" },
    ];
    this.pagesOptions = [
      { title: 'Perfil', component: ProfilePage, icon: "person" },
    ];
    this.api.storage.get("user").then((data) => {
      if (data == undefined) {
        this.api.user = undefined;
        this.rootPage = LoginPage;
        return
      }
      else {
        this.api.user = JSON.parse(data);
        this.rootPage = Home;
        this.active = this.pages[0];
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }

  openPage(page) {
    if (this.active != page) {
      this.nav.setRoot(page.component);
      this.active = page;
    }
  }
  logout() {
    this.api.user = undefined;
    this.api.storage.clear();
    this.nav.setRoot(LoginPage);
    this.rootPage = LoginPage;
  }
}
