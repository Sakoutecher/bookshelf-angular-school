import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
  book!: BookModel[]

  constructor(private bookService: BookService) {}

  onClickAvailable() {
    this.book = this.bookService.getBookAvailable()
  }

  onClickAll() {
    this.book = this.bookService.getAllBooks()
  }

  ngOnInit(): void {
    this.book = this.bookService.getAllBooks()
  }
}
