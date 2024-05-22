import { Component, Input } from '@angular/core';
interface objectDataType {
  id: number;
  foodName: string;
  throughoutPrice: number;
  price: number;
  starRating: number;
  foodDescription: string;
  image: string;
  quantity: number
}

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  @Input() getArray: objectDataType[] = []; 

  constructor(){
  }

  calculateTotal() {
    let overallTotal = 0;
    for (let item of this.getArray) {
      overallTotal += item.price * item.quantity;
        if(item.quantity === 0){
          console.log("hello");
          
        }
    }
    return overallTotal;
  }
}
