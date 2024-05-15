import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent {
  countdown: number = 5;
  protected countdownInterval: any;
  showAlert: boolean = false;
  registeredBook: boolean = false;
  bookForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    pages: ['', Validators.required],
    readed: [false],
    rating: [0],
    cover: [''],
  });
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  onSubmit() {
    this.formSubmitted = true;
    if(this.bookForm.invalid)
      return;

    const newBook: Book = {
      title: this.bookForm.controls.title.value!,
      author: this.bookForm.controls.author.value!,
      pages: Number(this.bookForm.controls.pages.value!),
      readed: this.bookForm.controls.readed.value!,
      rating: this.bookForm.controls.rating.value!,
      cover: this.bookForm.controls.cover.value!,
    }

    this.booksService.addBook(newBook)
      .subscribe({
        next: _ => {
          this.showAlert = true;
          this.registeredBook = true;
          this.countdownInterval = setInterval(() => {
            this.countdown--;
            if(this.countdown == 0) {
              clearInterval(this.countdownInterval);
              this.router.navigate(['/']);
            }
          }, 1000);
        },
        error: _ => {this.showAlert = true;}
      });
  }

  rating(stars: number) {
    this.bookForm.controls.rating.setValue(stars);
  }
}
