import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JsComponent } from './js/js.component';
import { TsComponent } from './ts/ts.component';
import { AngularComponent } from './angular/angular.component';
import { StudentsComponent } from './students/students.component';
import { DepartmentactivitiesComponent } from './departmentactivities/departmentactivities.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { ItComponent } from './it/it.component';
import { Cse2Component } from './cse2/cse2.component';
import { Firstyear1Component } from './firstyear1/firstyear1.component';
import { Firstyear2Component } from './firstyear2/firstyear2.component';
import { Secondyear1Component } from './secondyear1/secondyear1.component';
import { Secondyear2Component } from './secondyear2/secondyear2.component';
import {HttpClientModule} from '@angular/common/http';
import { BindingComponent } from './binding/binding.component';
import { UserRegestrationComponent } from './user-regestration/user-regestration.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductMangementComponent } from './product-mangement/product-mangement.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    TechnologiesComponent,
    JsComponent,
    TsComponent,
    AngularComponent,
    StudentsComponent,
    DepartmentactivitiesComponent,
    CseComponent,
    EceComponent,
    ItComponent,
    Cse2Component,
    Firstyear1Component,
    Firstyear2Component,
    Secondyear1Component,
    Secondyear2Component,
    BindingComponent,
    UserRegestrationComponent,
    UserListComponent,
    ProductMangementComponent,
    FooterComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
