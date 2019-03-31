/*
Name            : Bishnu Khanal
Student Number  : 300924228
Designation     : Assignment 2 Mean Portfolio site
Site / Page     : contact-list.service.ts
*/

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Contact } from "../models/contact";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class ContactListService {
  private user: User;

  private endpoint = "http://localhost:3000/api/contact-list/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getContact(contact: Contact): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "edit/" + contact._id,
      this.httpOptions
    );
  }

  public addContact(contact: Contact): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "add",
      contact,
      this.httpOptions
    );
  }

  public editContact(contact: Contact): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "edit/" + contact._id,
      contact,
      this.httpOptions
    );
  }

  public deleteContact(contact: Contact): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "delete/" + contact._id,
      this.httpOptions
    );
  }
}
