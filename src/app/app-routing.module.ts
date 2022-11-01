import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent},
  { path: 'students', component: StudentlistComponent},
  { path: 'studentdetails', component: StudentdetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, 
  StudentlistComponent, StudentdetailComponent, PageNotFoundComponent, DepartmentDetailComponent]
