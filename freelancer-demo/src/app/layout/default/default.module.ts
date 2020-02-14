import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component'
import {RouterModule} from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/component/shared.module';
import{ MatSidenavModule, MatDividerModule, MatPaginatorModule, MatTableModule, MatSortModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from 'src/app/dialogs/add/add.component';
import { DeleteComponent } from 'src/app/dialogs/delete/delete.component';
import { EditComponent } from 'src/app/dialogs/edit/edit.component';
import { ShowComponent } from 'src/app/dialogs/show/show.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ]
})
export class DefaultModule { }
