<script setup lang="ts">
import {useSelector, useDispatch} from "@reduxjs/vue-redux";
import {RootState} from "../store";
import {addToCart} from "../store/cart-slice.ts";
import {v4} from "uuid";

const cart = useSelector((store: RootState) => store.cart.value);

const dispatch = useDispatch();

function add() {
  dispatch(addToCart({
    id: v4(),
    price: 10,
    name: "Some good",
    quantity: 1
  }))
}
</script>

<template>
  <p>Hello from Vue {{cart.length}}!</p>
  <button @click="add()">Add one</button>
</template>
