import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Api } from '../../providers/api';
import { Home } from '../page1/page1';
import { PedidoGuiadoPage } from '../pedido-guiado/pedido-guiado';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api, public alert: AlertController, public loading: LoadingController) { }

    ionViewDidLoad() {

    }

    doLogin() {
        var loading = this.loading.create({ content: "Iniciando Sesión" });
        loading.present();
        this.api.doLogin().then((response: any) => {
            loading.dismiss();
            this.api.saveUser(response);
            this.api.saveData()
            this.api.user = response;
            this.navCtrl.setRoot(Home);
        }).catch((err) => {
            if (err.error == 401) {
                this.alert.create({ title: "Error", message: "Email o contraseña invalidos", buttons: ["Ok"] }).present();
            } else {
                this.alert.create({ title: "Error", message: "Error al iniciar sesión", buttons: ["Ok"] }).present();
            }
            loading.dismiss();
        })
    }

}
