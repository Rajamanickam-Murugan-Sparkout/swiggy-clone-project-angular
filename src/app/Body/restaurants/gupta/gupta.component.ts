import { Component } from '@angular/core';
interface objectDataType {
  id: number,
  foodName: string,
  throughoutPrice: number,
  price: number,
  starRating: number,
  foodDescription: string,
  image: string,
  quantity: number,
}

@Component({
  selector: 'app-gupta',
  templateUrl: './gupta.component.html',
  styleUrls: ['./gupta.component.css']
})
export class GuptaComponent {
  foodImageUrl = 'assets/images/food-images/gupta.jpg'

  foodLists: objectDataType[] = [
    {
      id: 1,
      foodName: 'Kuska+sweet',
      throughoutPrice: 151,
      price: 100,
      starRating: 4.3,
      foodDescription: 'Spiciest veg pizza with jalapeno & red paprika toppings.',
      image: '',
      quantity: 0,
    },
    {
      id: 2,
      foodName: 'Veg Schezwan Rice',
      throughoutPrice: 189,
      price: 155,
      starRating: 4.5,
      foodDescription: 'Spiciest veg pizza with jalapeno & red paprika toppings.',
      image: '',
      quantity: 0,
    },
    {
      id: 3,
      foodName: 'Grill Chettinadu Fry',
      throughoutPrice: 201,
      price: 169,
      starRating: 4.5,
      foodDescription: 'Hot & spicy chicken pizza with a combination of chicken keema.',
      image: '',
      quantity: 0,
    }
  ]

  pushArray: objectDataType[] = [];

  constructor(){
    
  }

  /**
   * Adds item
   * @param index 
   */
  addItem(index: number) {
    this.foodLists[index].quantity++;
  }

  /**
   * Decs item
   * @param index 
   */
  decItem(index: number) {
    this.foodLists[index].quantity--;
  }

  // @Output() foodDetails = new EventEmitter();
  
  
  giveDataToChild(idx: number){
    // console.log(this.foodLists[idx]);
    this.pushArray.push(this.foodLists[idx]);
    // this.foodDetails.emit(this.foodLists[idx])
    // console.log(this.pushArray);
  }


}
