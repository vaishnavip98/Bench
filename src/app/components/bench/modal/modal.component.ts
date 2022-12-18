import { Component, OnInit } from '@angular/core';
import { Bench } from 'src/app/models/bench.model';
import { AdminBenchService } from 'src/app/services/admin-bench.service';

@Component({
  selector: 'app-modal',
  templateUrl:'./modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
partnerList:any[]=[];

addBenchRequest: any={}

constructor(private adminBenchService: AdminBenchService ) {}
  
ngOnInit(): void{
  this.adminBenchService.getAllPartner()
  .subscribe({
    next: (partners) => {
        this.partnerList = partners;
        console.log(this.partnerList);
        // console.log(bench);
    },
    error: (response) => {
      console.log(response);
    }
  });
  // console.log(this.benchs);
}
 addBench(){
   // this.addBenchRequest.PartnerId = "abc";
  //  for (let index = 0; index < this.partnerList.length; index++) {
  //    if(this.partnerList[index].partnerName===document.getElementById("PN").Selected){
  //       console.log("hi");
  //       this.addBenchRequest.PartnerId=this.partnerList[index].partnerId;
  //     }
  //   }
    console.log(this.partnerList);
    this.addBenchRequest.PartnerId=this.partnerList[0].partnerId;
    console.log(this.addBenchRequest.PartnerName);
    this.adminBenchService.addBench(this.addBenchRequest)
  .subscribe({
    next: (bench) =>{
      console.log(bench);
    }
  });
  // window.location.reload();

  // console.log(this.addBenchRequest);
 }
}
