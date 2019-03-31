/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : footer.component.ts
*/
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() {}

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }
}
