import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})

export class BookDetailsComponent implements OnInit {

  bookChild!: BookModel
  available!: string

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {}

  onTake() {
    const bookId = this.bookChild.id
    this.bookService.setAvailable(bookId)
    this.bookChild.isAvailable ? this.available = "Available" : this.available = "Not available"
  }

  ngOnInit(): void {
    const bookId = +this.activatedRoute.snapshot.params['id']
    this.bookChild = this.bookService.getBook(bookId)
    this.bookChild.isAvailable ? this.available = "Available" : this.available = "Not available"
  } 
}
