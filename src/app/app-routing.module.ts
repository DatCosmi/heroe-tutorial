import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './view/table/table.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: HomeComponent},
  {path: 'table', component:TableComponent},
  {path: 'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
