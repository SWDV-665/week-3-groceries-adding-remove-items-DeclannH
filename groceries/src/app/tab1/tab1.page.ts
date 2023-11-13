import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {





  
constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
}

items = [
  "Milk",
  "Bread",
  "Eggs",
  "Chickens **NO ROOSTERS**",
  "Flagyl"

]

addItem(): void{
  console.log("Adding Item");

  
}

public addButtons = ['OK'];
  public addInputs = [
    {
      placeholder: 'Grocery Item',
    },

  ];

  public deleteButtons = ['OK'];
  public deleteInputs = [
    {
      placeholder: 'Grocery Item',
    },

  ];

}










