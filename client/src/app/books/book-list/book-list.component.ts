import { Component, effect, Input } from '@angular/core';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookService } from '../book.service';
import { Book } from '../../shared/models/Book';
import { BooksPaginationComponent } from '../books-pagination/books-pagination.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookItemComponent, BooksPaginationComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  providers: []
})
export class BookListComponent {
  books: Book[] = [];
  constructor(public bookService: BookService){
    
    effect(() => {
      this.books = this.bookService.booksView();
    })
  }

  }
