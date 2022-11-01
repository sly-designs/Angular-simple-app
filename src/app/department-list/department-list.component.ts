import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `<h3>
    Department List
  </h3>
  <ul class="items">
     <li (click)="onSelect(department)" *ngFor="let department of department">
         <span class="badge">{{department.id}}</span> {{department.name}}
     </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  department = [
    {"id": 1, "name": "Information Security"},
    {"id": 2, "name": "Navision"},
    {"id": 3, "name": "Software Development"},
    {"id": 4, "name": "Management"},
    {"id": 5, "name": "Business"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any){
      this.router.navigate(['/departments', department.id]);
  }

}
