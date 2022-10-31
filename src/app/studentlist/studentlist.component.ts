import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  template: `
  <h2>GT 6</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let student of students">
   <li>{{student.name}} </li>
   </ul>
  `,
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  public students: any = [];
  public errorMsg: any;

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
 this._studentService.getStudents()
      .subscribe(data => this.students = data,
                 error => this.errorMsg = error);
  }

}
