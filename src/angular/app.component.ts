import {Component} from "@angular/core";
import {injectSelector, injectDispatch} from "@reduxjs/angular-redux";
import {RootState} from "../store";
import {addToCart} from "../store/cart-slice.ts";
import {v4} from "uuid";

@Component({
  selector: 'app-angular-body',
  standalone: true,
  template: `
    <p>Hello from Angular {{cart().length}}!</p>
    <button (click)="add()">Add one</button>
  `,
})
export class AngularAppComponent {
  cart = injectSelector((store: RootState) => store.cart.value);

  dispatch = injectDispatch();

  add() {
    this.dispatch(addToCart({
      id: v4(),
      price: 10,
      name: "Some good",
      quantity: 1
    }))
  }
}
