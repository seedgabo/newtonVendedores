import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {Api} from '../../providers/api';
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

  query ="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:Api, public alert:AlertController) {}

  ionViewDidLoad() {
    this.api.get(`clientes?orWhereNull[]=vendedor_id&orWhere[vendedor_id]=${this.api.user.id}&limit=100`).then((clientes)=>{
        this.api.clientes = clientes;
        this.api.storage.set("clientes",JSON.stringify(clientes));
    }).catch((err)=>{
        this.alert.create({title:"Error",message:"Ocurrió un error al actualizar los clientes", buttons:["OK"]}).present();
    });
  }

  selectCliente(cliente){
      this.api.cliente = cliente;
      this.api.storage.set("cliente",JSON.stringify(cliente));
  }

  clearCliente(){
      this.api.cliente = null;
      this.api.storage.remove("cliente");
  }

}
