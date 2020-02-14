import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  dialogRef: MatDialogRef<DeleteComponent>
 public data: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }


}
