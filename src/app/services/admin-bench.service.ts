import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
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

  addBench(addBenchRequest: Bench):Observable<Bench>{
    return this.http.post<Bench>(this.baseApiUrl+'/api/AdminBench', addBenchRequest);
  }

  getBenchById(benchId:string):Observable<Bench>{

    return this.http.get<Bench>(this.baseApiUrl+'/api/AdminBench/'+ benchId);

  }
  deleteBenchById(benchId:string):Observable<any>{

    return this.http.delete<any>(this.baseApiUrl+'/api/AdminBench/'+ benchId);

  }
  getPartnerById(benchId:string):Observable<any>{

    return this.http.get<any>(this.baseApiUrl+'/api/Partner/'+ benchId);

  }

  getPartnerNameByPartnerId(partnerId:string){
    return this.http.get<any>(this.baseApiUrl+'/api/Partner/'+ partnerId);

  }

  getAllPartner(): Observable<any[]> {
    
    return this.http.get<any[]>(this.baseApiUrl + '/api/Partner');
  }

  updateBench(benchId:any, updateBenchRequest: Bench): Observable<Bench>{
    return this.http.put<Bench>(this.baseApiUrl + '/api/AdminBench/' + benchId, updateBenchRequest);
  }



}
