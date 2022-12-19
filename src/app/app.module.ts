import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenchComponent } from './components/bench/bench-list/bench-list.component';
import { PaginationComponent } from './components/bench/pagination/pagination.component';
import { BenchHeaderComponent } from './components/bench/bench-header/bench-header.component';
import { AddBenchBarComponent } from './components/bench/add-bench-bar/add-bench-bar.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddBenchComponent } from './components/bench/add-bench/add-bench.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    BenchComponent,
    PaginationComponent,
    BenchHeaderComponent,
    AddBenchBarComponent,
    AddBenchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
