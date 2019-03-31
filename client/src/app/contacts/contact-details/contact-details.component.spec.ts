/*
Name              : Bishnu Khanal
Student Number    : 300924228
Designation       : Assignment 2 Mean Portfolio site
Site / Page       : contact.details.component.spec.ts
*/
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactDetailsComponent } from "./contact-details.component";

describe("ContactDetailsComponent", () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
