import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(public clientService: ClientService) { 
    this.formGroup = new FormGroup({
      DateOfBirth: new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Sex: new FormControl('', Validators.required),
      IdNumber: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.formGroup.invalid) {
      return;
    }
  
    const formData = this.formGroup.value;
  
    this.clientService.createClient(formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // Handle the response
      },
      (error) => {
        console.error('Error submitting form:', error);
        // Handle the error
      }
    );
  }
  
}
