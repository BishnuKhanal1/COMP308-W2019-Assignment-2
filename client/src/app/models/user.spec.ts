/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : user.spec.ts
*/

import { User } from "./user";

describe("User", () => {
  it("should create an instance", () => {
    expect(new User()).toBeTruthy();
  });
});
