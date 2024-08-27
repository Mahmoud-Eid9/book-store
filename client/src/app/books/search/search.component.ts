import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: []
})
export class SearchComponent {
  searchQuery: string = "";
  constructor(private bookService: BookService){
    effect(() => {

    })
  }

    searchSubmit(){
      this.bookService.searchBook(this.searchQuery);
    } 
}
