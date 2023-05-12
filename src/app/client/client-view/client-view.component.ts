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

  private client: Client[] = [];
  private clientId: string = '';
  private dataSource: any = [];

  constructor(public clientService: ClientService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('clientId')) {
        this.clientId = paramMap.get('clientId') as string;
        console.log(`clientId: ${this.clientId}`)

        this.clientService.fetchClient(this.clientId)
        // .subscribe(
        //   (response) => {
        //     // this.client = response as Client[]; // Handle the response data
        //     console.log(response)
        //     // this.dataSource = [...this.client]
        //   },
        //   (error) => {
        //     console.error(error); // Handle any errors
        //   }
        // );
        console.log(this.client);
      } 
    });
  }

}
