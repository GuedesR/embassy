import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client.model';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientList: Client[] = [];
  private claims = this.authService.instance.getActiveAccount()?.idTokenClaims;
  private url: string = 'https://embassy-apim.azure-api.net';
  private headerList: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', '2fedc58fb2704cfab9d444f25e8b79e4');

  constructor(private http: HttpClient, private authService: MsalService) {}

  fetchClientList() {
    const relativePath: string = '/ListPeople';
    const body = JSON.stringify({
      username: this.claims?.emails?.toString(),
    });
    return this.sentRequest(relativePath, body);
  }

  createClient(formData: any) {
    const createClientRelativePath: string = '/person';
    const body = JSON.stringify({
      DateOfBirth: formData.DateOfBirth,
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      Sex: formData.Sex,
      IdNumber: formData.IdNumber,
      Email: formData.Email,
      ListOfRoles: [2],
    });
    return this.http.post(this.url + createClientRelativePath, body, {
      headers: this.headerList,
    });
  }

  fetchClient(clientId: number) {
    const relativePath: string = '/ListPerson';
    const body = JSON.stringify({
      Id: clientId,
      username: this.claims?.emails?.toString(),
    });
    console.log(body);
    return this.sentRequest(relativePath, body);
  }

  sentRequest(relativePath: string, body: string) {
    return this.http.post(this.url + relativePath, body, {
      headers: this.headerList,
    });
  }
}
