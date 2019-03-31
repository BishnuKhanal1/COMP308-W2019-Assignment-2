/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : contact-list.service.spec.ts
*/

import { TestBed } from "@angular/core/testing";

import { ContactListService } from "./contact-list.service";

describe("ContactListService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ContactListService = TestBed.get(ContactListService);
    expect(service).toBeTruthy();
  });
});
