import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

//Root routes
const routes: Routes = [

  // call  Employees
  // localhost:4200/employees
  {path: 'employees',component: EmployeesComponent,
    loadChildren: () => import('./employees/employees.module')
    .then(x=>x.EmployeesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
