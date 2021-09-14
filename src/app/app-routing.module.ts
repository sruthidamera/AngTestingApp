import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CseComponent } from './cse/cse.component';
import { Cse2Component } from './cse2/cse2.component';
import { DepartmentactivitiesComponent } from './departmentactivities/departmentactivities.component';
import { EceComponent } from './ece/ece.component';
import { Firstyear1Component } from './firstyear1/firstyear1.component';
import { Firstyear2Component } from './firstyear2/firstyear2.component';
import { HomeComponent } from './home/home.component';
import { ItComponent } from './it/it.component';
import { JsComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { ProductMangementComponent } from './product-mangement/product-mangement.component';
import { RegisterComponent } from './register/register.component';
import { Secondyear1Component } from './secondyear1/secondyear1.component';
import { Secondyear2Component } from './secondyear2/secondyear2.component';
import { StudentsComponent } from './students/students.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TsComponent } from './ts/ts.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'contactus', component : ContactusComponent},
  {path : 'Products', component : ProductMangementComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
