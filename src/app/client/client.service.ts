import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from './client.model'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientList: Client[] = [];
  private url: string = "https://embassy-apim.azure-api.net";
  private headerList: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', '2fedc58fb2704cfab9d444f25e8b79e4');
  

  constructor(private http: HttpClient) { }

  fetchClientList() {
    
    const getClientRelativePath: string = "/ListPeople";
    const body = JSON.stringify({
      username: "User1"
    })
    return this.http.post(this.url + getClientRelativePath, body, { headers: this.headerList })
  };

  fetchClient( clientId: string) {
    const relativePath: string = "/ListPeople";
    const body = JSON.stringify({
      Id: clientId
    })

    return this.sentRequest(relativePath, body)
  }

  sentRequest(relativePath: string, body: string) {
    return this.http.post(this.url + relativePath, body, { headers: this.headerList })
      .subscribe ((response) => {console.log(response)}) 
  }

}
