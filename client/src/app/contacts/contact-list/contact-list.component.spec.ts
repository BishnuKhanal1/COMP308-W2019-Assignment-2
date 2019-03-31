/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : contact.list.component.spec.ts
*/

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactListComponent } from "./contact-list.component";

describe("ContactListComponent", () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
