import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit{
  @Input()
  bookChild!: BookModel
  available!: string

  constructor(private bookService: BookService, private router: Router) {}

  onShowMore() {
    const bookId = this.bookChild.id
    this.router.navigateByUrl('book-list/' + bookId)
  }

  onTake() {
    const bookId = this.bookChild.id
    this.bookService.setAvailable(bookId)
    this.bookChild.isAvailable ? this.available = "Available" : this.available = "Not available"
  }

  ngOnInit(): void {
    this.bookChild.isAvailable ? this.available = "Available" : this.available = "Not available"
  }
}
