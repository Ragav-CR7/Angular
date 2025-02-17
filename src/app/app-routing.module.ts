import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FetchComponent } from './fetch/fetch.component';

const routes: Routes = [
  { path: 'insert', component: InsertComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'search', component: FetchComponent },
  { path: '', redirectTo: '/insert', pathMatch: 'full' }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
