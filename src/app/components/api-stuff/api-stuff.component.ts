import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IData, IDesignation } from '../../model/interface/data';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { IDesignationResponseModell } from '../../model/interface/designation';

@Component({
  selector: 'app-api-stuff',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-stuff.component.html',
  styleUrl: './api-stuff.component.scss'
})
export class ApiStuffComponent implements OnInit {

  dataList: IData[] = [];
  http = inject(HttpClient);
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  constructor() { }

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res:IDesignationResponseModell) => {
      this.designationList = res.data;
    },error=>{
      console.log('Error: ', error);
    });
    


    this.getAllData() ;
  }
  

  getAllData() {
    this.http.get<IDesignationResponseModell>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:IDesignationResponseModell) => { 
      this.dataList = res.data;
      //////console.log('#######################');
      ///console.log(res.result);
      //console.log(this.dataList);
    });   
    
  }
}
