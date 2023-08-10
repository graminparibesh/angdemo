import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="Saptarshi";
  tech="Angular"
  display()
  {
    alert("Welcome to my class!!!")
  }
  uname=new FormControl();
  updateName()
  {
    this.uname.setValue("amitava")
  }

  products=[
    {
      name:"Apple",
      price:50000,
      stock:20
    },
    {
      name:"Samsung",
      price:45000,
      stock:30
    },
    {
      name:"MI",
      price:40000,
      stock:25
    },
    {
      name:"Nokia",
      price:25000,
      stock:76
    },
    {
      name:"XAOMI",
      price:50000,
      stock:20
    }
    ];
    }

