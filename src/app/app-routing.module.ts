import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UserlistComponent } from './Users/userlist/userlist.component'

const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch:"full"},
  { path: "users/list", component: UserlistComponent},
  { path: "users/edit/:id", component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
