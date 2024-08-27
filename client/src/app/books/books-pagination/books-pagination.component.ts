import { Component, effect } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-pagination',
  standalone: true,
  imports: [],
  templateUrl: './books-pagination.component.html',
  styleUrl: './books-pagination.component.css',
  providers: [],
})
export class BooksPaginationComponent {
  limit: number = 12;
  pages: number[] = [];


  constructor(public bookService: BookService){
    effect(() => {
      console.log(this.bookService.books().length);
      const pageCount = Math.ceil(this.bookService.books().length/this.limit);
      this.pages = this.range(1, pageCount);
    })
  }

 

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
