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
        this.alert.create({title:"¿Desea Procesar este Carrito?",buttons:
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
            console.log(response);
        })
        .catch((err)=>{
            console.error(err);
        });


    }

    validarpedido(){
        return true;
    }

}
