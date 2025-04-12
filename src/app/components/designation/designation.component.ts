import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  masterService = inject(MasterService);
  http = inject(HttpClient);
  
  constructor() {
    
  }
  ngOnInit(): void {
    this.getAllDesignations2();
  }
  getAllDesignations2() {
    this.masterService.getDesignations().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
    }, error => {
      console.error('Error fetching designations:', error);
    }
    );
  }
  getAllDesignations3() {
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation').subscribe((res:APIResponseModel) => {   
      this.designationList = res.data;
    }
    );
  }
}
