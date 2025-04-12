import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IDesignation, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = [];
  masterService =  inject(MasterService);
  http = inject(HttpClient);
  

  constructor() {


  }

  ngOnInit(): void {
    //this.getAllRoles();
   this.getAllRolesMaster();
  }
  getAllRolesMaster() {
    this.masterService.getAllRole1().subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
    }, (error: any) => {
      console.error('Error fetching designations:', error);
    }
    );
  }
  getAllRoles() {
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel) => {   
      this.roleList = res.data;
    }
    );
  }

 

}
