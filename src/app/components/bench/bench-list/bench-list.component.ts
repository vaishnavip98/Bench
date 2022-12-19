import { Component, OnDestroy, OnInit } from '@angular/core';
import { Bench } from 'src/app/models/bench.model';
import { AdminBenchService } from 'src/app/services/admin-bench.service';

@Component({
  selector: 'app-bench-list',
  templateUrl: './bench-list.component.html',
  styleUrls: ['./bench-list.component.css']
})
export class BenchComponent implements OnInit {

  benchs: Bench[] = [];
  selectedBench: Bench = {
    benchName:"",
    benchId: "",
    partnerId: "",
    noOfResource: 0,
    skillSet: "",
    ratePerHrUSD: 0,
    yearsOfExperince: ""
  };
  addBenchRequest: Bench = {
    benchName:"",
    benchId: "",
    partnerId: "",
    noOfResource: 0,
    skillSet: "",
    ratePerHrUSD: 0,
    yearsOfExperince: ""
  };
  addBenchRevisied:any;
  partnerList: any[] = [];

  constructor(private adminBenchService: AdminBenchService) { }

  ngOnInit(): void {
    this.adminBenchService.getAllBench()
      .subscribe({
        next: (bench) => {
          this.benchs = bench;
          this.benchs.forEach((bench,i) => {
            this.adminBenchService.getPartnerNameByPartnerId(bench.partnerId)
              .subscribe({
                next: (partner) => {
                  console.log(partner);
                    this.benchs[i].benchName=partner.partnerName;
                },
                error: (response) => {
                  console.log(response);
                }
              })
          });
          console.log(this.benchs);
        },
        error: (response) => {
          console.log(response);
        }
      });
    console.log(this.benchs);
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
  }
  editBench(selected: any) {
    this.selectedBench = selected;
    console.log(this.selectedBench);
  }
  deleteBench(selected: any) {
    this.adminBenchService.deleteBenchById(selected).subscribe({
      next: (bench) => {
        console.log(bench);
        window.location.reload();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  addBench() {
    // this.addBenchRevisied.benchId=this.addBenchRequest.benchId;
    // this.addBenchRevisied.partnerId=this.addBenchRequest.partnerId;
    // this.addBenchRevisied.noOfResource=this.addBenchRequest.noOfResource;
    // this.addBenchRevisied.skillSet=this.addBenchRequest.skillSet;
    // this.addBenchRevisied.ratePerHrUSD=this.addBenchRequest.ratePerHrUSD;
    // this.addBenchRevisied.yearsOfExperince=this.addBenchRequest.yearsOfExperince;
    
    console.log(this.addBenchRevisied);
    this.adminBenchService.addBench({partnerId:this.addBenchRequest.partnerId,
      noOfResource:this.addBenchRequest.noOfResource,
      skillSet:this.addBenchRequest.skillSet,
      ratePerHrUSD:this.addBenchRequest.ratePerHrUSD,
    yearsOfExperince:this.addBenchRequest.yearsOfExperince
    }).subscribe({
      next: (bench) => {
        console.log(bench);
        window.location.reload();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  updateBench(){
    console.log(this.addBenchRevisied);
    this.adminBenchService.editBench({partnerId:this.addBenchRequest.partnerId,
      noOfResource:this.addBenchRequest.noOfResource,
      skillSet:this.addBenchRequest.skillSet,
      ratePerHrUSD:this.addBenchRequest.ratePerHrUSD,
    yearsOfExperince:this.addBenchRequest.yearsOfExperince
    },this.addBenchRequest.benchId).subscribe({
      next: (bench) => {
        console.log(bench);
        window.location.reload();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
