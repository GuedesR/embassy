import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  public client: Client = {
    Id: 0,
    FirstName: "",
    LastName: "",
    IdNumber: "",
    DateOfBirth: "",
    Email: "",
    Sex: "",
    PhotoURL: ""
  }
  private clientId: number = 0;
  public hasClient: boolean = false;

  constructor(public clientService: ClientService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('clientId')) {
        this.clientId = Number(paramMap.get('clientId'));
        console.log(`clientId: ${this.clientId}`)

        this.getClient(this.clientId)
      }
    });
  }

  getClient(clientId: number) {
    this.clientService.fetchClient(clientId)
      .subscribe(
        (response) => {
          console.log(response)
          this.client = response as Client; // Handle the response data
          this.hasClient = true;
        },
        (error) => {
          console.error(error); // Handle any errors
        }
      );
  }

}
