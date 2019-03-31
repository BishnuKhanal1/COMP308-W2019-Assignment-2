/*
Name             : Bishnu Khanal
Student Number   : 300924228
Designation      : Assignment 2 Mean Portfolio site
Site / Page      : services.component.ts
*/

import { Component, OnInit } from "@angular/core";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
