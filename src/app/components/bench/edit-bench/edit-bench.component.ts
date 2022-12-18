import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminBenchService } from 'src/app/services/admin-bench.service';

@Component({
  selector: 'app-edit-bench',
  templateUrl: './edit-bench.component.html',
  styleUrls: ['./edit-bench.component.css']
})
export class EditBenchComponent implements OnInit {
  partnerList:any[]=[];

  benchDetails: any={}

  constructor(private route:ActivatedRoute, private adminBenchService: AdminBenchService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=> {
       const benchId = params.get('benchId');

       if(benchId){
          this.adminBenchService.getBenchById(benchId)
          .subscribe({
            next: (response) => {
                this.benchDetails = response;
            }
          })
       }
      }
    })
  }

 
}
