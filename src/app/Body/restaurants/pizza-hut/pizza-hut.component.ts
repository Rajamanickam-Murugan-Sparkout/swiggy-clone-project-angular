import { Component } from '@angular/core';
interface objectDataType {
  id: number,
  foodName: string,
  throughoutPrice: number,
  price: number,
  starRating: number,
  foodDescription: string,
  image: string,
  quantity: number
}


@Component({
  selector: 'app-pizza-hut',
  templateUrl: './pizza-hut.component.html',
  styleUrls: ['./pizza-hut.component.css']
})

export class PizzaHutComponent {

  foodImageUrl = 'assets/images/food-images/pizza-hut.jpg'
  // something = 'something happening';
  foodLists: objectDataType[] = [
    {
      id: 1,
      foodName: 'Blazing Chicken & Paprika',
      throughoutPrice: 379,
      price: 179,
      starRating: 4.3,
      foodDescription: 'Hot & spicy chicken pizza with a combination of chicken keema.',
      image: 'foodImageUrl',
      quantity: 0,
    },
    {
      id: 2,
      foodName: 'Fiery Jalapeno & Paprika',
      throughoutPrice: 269,
      price: 189,
      starRating: 4.5,
      foodDescription: 'Spiciest veg pizza with jalapeno & red paprika toppings.',
      image: 'assets/images/food-images/pizza-hut.jpg',
      quantity: 0,
    },
    {
      id: 3,
      foodName: 'Blazing Onion & Paprika',
      throughoutPrice: 209,
      price: 159,
      starRating: 4.5,
      foodDescription: 'Hot & spicy pizza with onion & red paprika toppings.',
      image: 'assets/images/food-images/pizza-hut.jpg',
      quantity: 0,
    }
  ]

  pushArray: objectDataType[] = [];

  constructor(){
    
  }

  addItem(index: number) {
  // debugger;
    this.foodLists[index].quantity++;
    // this.foodLists[index].totalPrice = this.foodLists[index].quantity * this.foodLists[index].price;
    // console.log(this.foodLists[index]);
  }

  decItem(index: number) {
    this.foodLists[index].quantity--;
    if(this.foodLists[index].quantity === 0 && this.pushArray.includes(this.foodLists[index])){
      this.pushArray.pop();
    }
    // this.foodLists[index].totalPrice = this.foodLists[index].quantity * this.foodLists[index].price;
  }
  
  
  giveDataToChild(idx: number){
    // console.log(this.foodLists[idx].totalprice);
    this.pushArray.push(this.foodLists[idx]);
    // console.log("val: "+ this.foodLists[idx].quantity);
  }

//   {
//     food_name:"burger",
//     price: "250",
//     quantity: "1",
//     amount: "250"
//   }

//   [
//     {
//       food_name:"burger",
//       price: "250",
//       quantity: "2",
//       amount: "250"
//     },
//     {
//       food_name:"piza",
//       price: "250",
//       quantity: "2",
//       amount: "250"
//     },
// ]



  
}
