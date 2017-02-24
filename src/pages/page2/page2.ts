import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {Api} from '../../providers/api';
import * as moment from 'moment';

@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    constructor(public navCtrl: NavController, public navParams: NavParams, public api:Api, public alert:AlertController) {
    }


    total(){
        var total = 0;
        this.api.carrito.forEach((prod)=>{
            total += prod.cantidad_pedidos * prod.precio;
        })
        return total;
    }

    delete(item,index){
        this.api.carrito.splice(index, 1);
        this.api.storage.set("carrito",JSON.stringify(this.api.carrito));
    }

    confirmarCarrito(){
        if(this.api.cliente == undefined){
            this.alert.create({title:"Debe Elegir un cliente",buttons:["OK"]}).present();
            return
        }
        this.alert.create({title:`¿Desea Procesar este carrito al cliente: ${this.api.cliente.full_name}?`,buttons:
        [
            {
                text:"Si",
                handler:()=>{
                    this.processCarrito();
                }
            },
            {
                text:"Cancelar",
                handler:()=>{

                }
            }

        ]
        }).present();
    }

    processCarrito(){
        if(!this.validarpedido()){
            return "Error";
        };
        console.log(this.api.carrito);
        var data = {
            cliente_id :this.api.cliente.id,
            vendedor_id: this.api.user.id,
            estado: 'pedido',
            direccion_envio: this.api.cliente.direccion,
            direccion_facturado:this.api.cliente.direccion,
            fecha_pedido: moment().format(),
            items: this.api.carrito,
        }

        this.api.post("pedidos",data).then((response)=>{
            this.alert.create({title:"Pedido Existoso",message:"El Carrito ha sido procesado", cssClass:"success", buttons:["Bien!"]}).present();
            this.api.clearCarrito();
        })
        .catch((err)=>{
            console.error(err);
            this.alert.create({title:"Error",message:"Error al cargar el pedido", cssClass:"danger", buttons:["Ok"]}).present();
        });


    }

    validarpedido(){
        return true;
    }

}
