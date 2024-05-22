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
  selector: 'app-bluemoon',
  templateUrl: './bluemoon.component.html',
  styleUrls: ['./bluemoon.component.css']
})
export class BluemoonComponent {
  foodImageUrl = 'assets/images/food-images/bluemoon.jpg'

  foodLists: objectDataType[] = [
    {
      id: 1,
      foodName: 'Kuska+sweet',
      throughoutPrice: 251,
      price: 222,
      starRating: 4.3,
      foodDescription: 'Spiciest veg pizza with jalapeno & red paprika toppings.',
      image: '',
      quantity: 0,
    },
    {
      id: 2,
      foodName: 'Veg Schezwan Rice',
      throughoutPrice: 259,
      price: 225,
      starRating: 4.5,
      foodDescription: 'Spiciest veg pizza with jalapeno & red paprika toppings.',
      image: '',
      quantity: 0,
    },
    {
      id: 3,
      foodName: 'Grill Chettinadu Fry',
      throughoutPrice: 421,
      price: 239,
      starRating: 4.5,
      foodDescription: 'Hot & spicy chicken pizza with a combination of chicken keema.',
      image: '',
      quantity: 0,
    }
  ]

  pushArray: objectDataType[] = [];

  constructor(){
    
  }

  addItem(index: number) {
    this.foodLists[index].quantity++;
  }

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
