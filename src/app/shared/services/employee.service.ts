import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Injectable({
providedIn: 'root'
})
export class EmployeeService {
//declare variables - global variables
employee: Employee = new Employee();
employees: Employee[] = [];
departments: Department[] = [];
constructor(private httpClient: HttpClient) { }
// 1 Get All Employees – Void Type
bindListEmployees(): void {
this.httpClient.get<Employee[]>(environment.apiUrl + "employees/")
.subscribe({
next: response => this.employees = response, // Success
error: error => console.error('Error:', error), // Error hand
complete: () => console.log('Request complete') // Completion
});
}
}
//3 Insert Employee

constructor(public employeeService: EmployeemployeeService,
    private router: Router
) { }
ngOnInit(): void {
    //Get all departments
    this.employeeService.getAllDepartments();
    }

    //Insert 
    addEmployee(form: NgForm){
        this.employeeService.insertEmployee(form.value)
        .subscribe(
            (response)=>{
                console.log(response);

                //Insert successful,clear error message
                console.log(response);
                this.errorMessage=null;

                //Refresh the list and navigate to the employee list page
                this.employeeService.bindListEmployees();
                this.employeeService.employees.unshift(response);
                this.router.navigate(['employees/list']);

                //Reset the form only after succesful submission
                format.reset();
            },
            (error)=>{
                console.log("Full error response:",error);
                this.errorMessage='An error occured';
            }
        );

    }
)
