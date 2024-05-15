import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { FormBookComponent } from './components/form-book/form-book.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'novo', component: FormBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
