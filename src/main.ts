import "./main.tsx"

import "zone.js"

import "@angular/compiler"
import {bootstrapApplication} from '@angular/platform-browser';
import {AngularAppComponent} from "./angular/app.component.ts";

import {provideRedux} from "@reduxjs/angular-redux";
import {store} from "./store";

bootstrapApplication(AngularAppComponent, {
  providers: [provideRedux({store})]
}).catch(console.error)
