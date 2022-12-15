import { Component } from '@angular/core';
import { Bench } from 'src/app/models/bench.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  addBenchRequest: Bench = {
    PartnerId: 1,
    NoOfResource: 0 ,
    SkillSet: '',
    RatePerHrUSD: 0,

  };
  addBench(){
    console.log(this.addBenchRequest);
  }

}
