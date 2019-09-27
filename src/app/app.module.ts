import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';


import { UserComponent } from './pages/user/user.component';
import { ProjectComponent } from './pages/project/project.component';
import { TaskComponent } from './pages/task/task.component';
import { ProjManagementService } from './service/proj-management.service';
import { TaskviewComponent } from './pages/taskview/taskview.component';



const appPath: Routes = [
  { path: 'addUser', component: UserComponent },
  { path: 'addProject', component: ProjectComponent },
  { path: 'addTask', component: TaskComponent },
  { path: 'viewTask', component: TaskviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    TaskComponent,
    TaskviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appPath)
  ],
  providers: [
    ProjManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
