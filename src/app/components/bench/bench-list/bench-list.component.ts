import { Component, OnDestroy, OnInit } from '@angular/core';
import {Bench} from 'src/app/models/bench.model';
import { AdminBenchService } from 'src/app/services/admin-bench.service';

@Component({
  selector: 'app-bench-list',
  templateUrl: './bench-list.component.html',
  styleUrls: ['./bench-list.component.css']
})
export class BenchComponent implements OnInit {

  benchs: any[]=[];

  constructor(private adminBenchService: AdminBenchService ) {}
  
  ngOnInit(): void{
    this.adminBenchService.getAllBench()
    .subscribe({
      next: (bench) => {
          this.benchs = bench;
          console.log(this.benchs);
          console.log(bench);
      },
      error: (response) => {
        console.log(response);
      }
    });
    console.log(this.benchs);
  }
}
