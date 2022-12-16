import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bench } from '../models/bench.model';

@Injectable({
  providedIn: 'root'
})
export class AdminBenchService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllBench(): Observable<Bench[]> {
    
    return this.http.get<Bench[]>(this.baseApiUrl + '/api/AdminBench');
  }


  getBenchById(benchId:string):Observable<Bench>{

    return this.http.get<Bench>(this.baseApiUrl+'/api/AdminBench/'+benchId);

  }

}
