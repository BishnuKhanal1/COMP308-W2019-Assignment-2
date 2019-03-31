/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : auth.service.spec.ts
*/

import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
