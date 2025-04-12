
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';


@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {

  ngOnInit(): void {
    this.loadClient();
  }

  clientObject: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);




  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    }
      , (error: any) => {
        console.error('Error client.Component ', error);
      }
    );
  }

  onSaveClient() {
    //debugger;
    this.clientService.addUpdate(this.clientObject).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Gut " + res.message)
        this.loadClient();
        this.clientObject = new Client();
      } else {
        alert(res.message)
      }
    })
  }

  onDeleteClient(arg0: number) {
    const isDelete = confirm("Are you sure to delete this record?");
    if (isDelete) {
      this.clientService.deleteClientById(arg0).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Gut " + res.message)
          this.loadClient();
        } else {
          alert(res.message)
        }
      })
    }
  }
  onEditClient(data: Client) {
    this.clientObject = data;
  }
}



