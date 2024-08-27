import { Component, effect } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors-pagination',
  standalone: true,
  imports: [],
  templateUrl: './authors-pagination.component.html',
  styleUrl: './authors-pagination.component.css'
})
export class AuthorsPaginationComponent {
  limit: number = 5;
  pages: number[] = [];


  constructor(public authorService: AuthorService){
    effect(() => {
      const pageCount = Math.ceil(this.authorService.authors().length/this.limit);
      this.pages = this.range(1, pageCount);
    })
  }

 

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
