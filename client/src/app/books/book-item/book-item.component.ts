import { Component, Input } from '@angular/core';
import { Book } from '../../shared/models/Book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  @Input() book!: Book;
  @Input() showButtons: boolean = false;

  constructor(private bookService: BookService, private router: Router) {}

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book);
  }

  editBook(book: Book): void {
    this.router.navigate(['/authors/book/edit'], { queryParams: { title: book.title, description: book.description, image: book.image, id: book.id }});
  }

  bookClick(): void {
    this.router.navigate(['/books/details'], { queryParams: { id: this.book.id}});
  }
}
