import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Issue} from '../models/issue';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseUrl='http://karaminventoryapi.rannlabprojects.com/Api/';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDialogData(): Issue {
    throw new Error("Method not implemented.");
  }
  getAllIssues() {
    throw new Error("Method not implemented.");
  }
 
  dataChange:BehaviorSubject<Issue[]>= new BehaviorSubject<Issue[]>([]);
// Temporarily stores data from dialogs
dialogData: any;

  constructor(private http: HttpClient) { }
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getProducts(): Observable<Issue[]> {
    return this.http.get<Issue[]>(baseUrl+'category/fetchcategory')
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  baseUrl<T>(baseUrl: any) {
    throw new Error("Method not implemented.");
  }
  
  
  

}
