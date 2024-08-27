import { Component, computed, effect, OnInit } from '@angular/core';
import { Author } from '../../shared/models/Author';
import { BookService } from '../book.service';
import { AuthorService } from '../../authors/author.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  providers: []
})
export class FilterComponent implements OnInit {
  books = computed(() => {
    return this.bookService.books();
  })
  authors: Author[] = [];
  filters: number[]=[];
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }

  constructor(private authorService: AuthorService, private bookService: BookService){
    effect(() => {
      this.authors = this.authorService.authors();
    })
  }

  applyFilter(): void{
    if(this.filters.length > 0){
    const view = this.books().filter(book => 
      this.filters.includes(book.author_id)
    );
    this.bookService.setBooksView(view);
  }else{
    this.bookService.changePage();
  }
  } 
  ngOnInit(): void {
    this.authorService.fetchAuthors();
  }

  addFilter(event: Event): void{
    const selectElement = event.target as HTMLInputElement;
    if(selectElement.checked){
      this.filters.push(parseInt(selectElement.value));
    }else{
      this.filters = this.filters.filter(filter => filter !== parseInt(selectElement.value))
    }
    this.applyFilter();
  }
}
