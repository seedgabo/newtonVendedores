import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Api} from '../../providers/api';
import * as moment from 'moment';
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  pedidos:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:Api) {}

  ionViewDidLoad(){
    this.getmisPedidos();
  }

  getmisPedidos(){
      var user_id = 1;
      this.api.get(`pedidos?where[user_id]=${user_id}&with[]=items&with[]=cliente&with[]=invoice`).then((data)=>{
          this.pedidos = data;
          console.log(data);
      });
  }

}
