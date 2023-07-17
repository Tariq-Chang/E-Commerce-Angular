import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // products=['one', 'two', 'three'];
  constructor() {
    // console.log(this.products);
    this.fetchData()
   }
   fetchData(){
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
}
}
