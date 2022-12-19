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
    console.log(this.addBenchRequest);
    this.adminBenchService.addBench(this.addBenchRequest).subscribe({
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
