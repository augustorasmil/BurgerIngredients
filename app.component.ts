import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "The Perfect Burger";
  patty = " Patty ";
  onions = " Onions ";
  buns = " Buns ";
  mayo = " Mayonnaise ";
  ketchup = " Ketchup ";

  patty_price = 5.00;
  onions_price = 1.00;
  buns_price = 3.00;
  mayo_price = 2.00;
  ketchup_price = 2.00;

  total_cost = 0;
  cash = 0;
  change;

  buy(){
    if(this.cash < this.total_cost || this.cash == 0){
      alert("Your cash isn't enough!");
    }
    else{
      this.change = this.cash - this.total_cost;
    }
  }
  add_patty(){
    var ul = document.getElementById("ingredients");
    var li = document.createElement("li");
    li.setAttribute('id', this.patty);
    li.appendChild(document.createTextNode(this.patty));
    ul.appendChild(li);
    this.total_cost = this.total_cost + this.patty_price;
  }
  add_onions(){
    var ul = document.getElementById("ingredients");
    var li = document.createElement("li");
    li.setAttribute('id', this.onions);
    li.appendChild(document.createTextNode(this.onions));
    ul.appendChild(li);
    this.total_cost = this.total_cost + this.onions_price;
  }
  add_buns(){
    var ul = document.getElementById("ingredients");
    var li = document.createElement("li");
    li.setAttribute('id', this.buns);
    li.appendChild(document.createTextNode(this.buns));
    ul.appendChild(li);
    this.total_cost = this.total_cost + this.buns_price;
  }
  add_mayo(){
    var ul = document.getElementById("ingredients");
    var li = document.createElement("li");
    li.setAttribute('id', this.mayo);
    li.appendChild(document.createTextNode(this.mayo));
    ul.appendChild(li);
    this.total_cost = this.total_cost + this.mayo_price;
  }
  add_ketchup(){
    var ul = document.getElementById("ingredients");
    var li = document.createElement("li");
    li.setAttribute('id', this.ketchup);
    li.appendChild(document.createTextNode(this.ketchup));
    ul.appendChild(li);
    this.total_cost = this.total_cost + this.ketchup_price;
  }
}
