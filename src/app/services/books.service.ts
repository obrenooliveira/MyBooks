import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly api = `${environment.apiUrl}/books/`;

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(this.api);
  }

  addBook(book: Book) {
    return this.http.post(this.api, book);
  }

  removeBook(id: number) {
    return this.http.delete<Book>(this.api+id);
  }
}
