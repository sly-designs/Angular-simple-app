import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEventPattern, Observable, throwError } from 'rxjs';
import { IStudent } from './student';
import {catchError} from "rxjs/operators"

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url: string = "/assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url)
                    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || "Server Error!");

  }

}
