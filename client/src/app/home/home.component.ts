import { Component, computed, effect, OnInit } from '@angular/core';
import { BookListComponent } from '../books/book-list/book-list.component';
import { BooksPaginationComponent } from '../books/books-pagination/books-pagination.component';
import { Book } from '../shared/models/Book';
import { BookService } from '../books/book.service';
import { FilterComponent } from '../books/filter/filter.component';
import { SearchComponent } from '../books/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookListComponent, BooksPaginationComponent, FilterComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  books = computed(() => {
    return this.bookService.books();
});
  total: number = 0;

  constructor(private bookService: BookService){
  }




  ngOnInit(): void {
    this.bookService.fetchBooks();
  }
}
