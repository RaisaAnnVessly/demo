import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
//setting Employees parent routing
const routes: Routes = [
  //employee--list
  { path:'list', component: EmployeeListComponent},
  //employee--add
  { path:'add', component: EmployeeAddComponent},
 //employee--edit
  { path:'edit/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
