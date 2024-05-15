import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$ = new Observable<Book[]>;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
   this.getBooks();
  }

  getBooks() {
    this.books$ = this.booksService.getAllBooks();
  }

  removeBook(id: number) {
    this.booksService.removeBook(id)
      .subscribe(_ => this.getBooks());
  }
}
