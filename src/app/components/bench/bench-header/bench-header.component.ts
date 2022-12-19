import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { AdminBenchService } from 'src/app/services/admin-bench.service';

@Component({
  selector: 'app-bench-header',
  templateUrl: './bench-header.component.html',
  styleUrls: ['./bench-header.component.css']
})
export class BenchHeaderComponent {

  length:number=10;
  
  constructor(private adminBenchService: AdminBenchService) { }
  filter:any[]=[];
  pages:number=(this.filter.length/this.length)+1; 
  searchValue:string="";
      searchBench(){
        console.log(this.length);
          this.adminBenchService.searchBench(this.searchValue)
          .subscribe({
            next: (bench) => {
              console.log(bench);
              this.filter=bench;
              console.log(bench);
            },
            error: (response) => {
              console.log(response);
            }
          });

      }


}
