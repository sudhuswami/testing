import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataService} from '../../services/data.service';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Issue} from '../../models/issue';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  displayedColumns = ['CategoryID', 'Name', 'Description', 'actions'];
  exampleDatabase: DataService | null;
  data:Issue []=[];
  index: number;
  id: number;
  isLoadingResults = true;

  constructor(public httpClient:HttpClient,
              public dialog:MatDialog,
              public dataService:DataService ) { }

              @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef
  
  ngOnInit() {
    this.dataService.getProducts()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }



}

