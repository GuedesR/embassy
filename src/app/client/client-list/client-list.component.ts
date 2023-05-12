import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  private clientList: Client[] = [];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'IdNumber'];
  dataSource: any = [];
  hasClient: boolean = false;

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.getClientList()
  }

  getClientList() {
    return this.clientService.fetchClientList()
    .subscribe(
      (response) => {
        this.clientList = response as Client[]; // Handle the response data
        console.log(this.clientList);
        this.dataSource = [...this.clientList];
        this.hasClient = true
      },
      (error) => {
        console.error(error); // Handle any errors
      }
    );
    console.log(this.clientList);
  }

}
