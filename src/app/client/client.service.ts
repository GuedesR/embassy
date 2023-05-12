import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from './client.model'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientList: Client[] = [];
  private url: string = "https://embassy-apim.azure-api.net";
  private getClientRelativePath: string = "/ListPeople";
  private headerList: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Ocp-Apim-Subscription-Key', '2fedc58fb2704cfab9d444f25e8b79e4')
    // .set('Authorization', 'Bearer YOUR_AUTH_TOKEN')
    ;
  private body = JSON.stringify({
    username: "User1"
  })

  constructor(private http: HttpClient) { }

  fetchClientList() {

    return this.http.post(this.url + this.getClientRelativePath, this.body, { headers: this.headerList })
    

   /*  this.clientList = [
      {
        id: 1,
        firstName: "Rodrigo",
        lastName: "Guedes",
        sex: "m",
        dateOfBirth: "1989-09-18T00:00:00"
      },
      {
        id: 2,
        firstName: "José",
        lastName: "Catela",
        sex: "m",
        dateOfBirth: "1984-11-11T00:00:00"
      },
      {
        id: 3,
        firstName: "José",
        lastName: "Gomes",
        sex: "m",
        dateOfBirth: "1989-09-18T00:00:00"
      },
      {
        id: 3,
        firstName: "Yanic",
        lastName: "Boel",
        sex: "m",
        dateOfBirth: "1991-04-27T00:00:00"
      }
    ] */

  }

}
