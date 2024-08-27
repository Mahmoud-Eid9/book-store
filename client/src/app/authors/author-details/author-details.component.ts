import { Component, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { BookItemComponent } from '../../books/book-item/book-item.component';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [BookItemComponent],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent implements OnInit {
  id: number  = 0;
  author = computed(() => {
    return this.authorService.authorDet().author;
  })
  books = computed(() => {
    return this.authorService.authorDet().books;
  })

  constructor(private route: ActivatedRoute, public authorService: AuthorService, private router: Router) {}

  addBook(){
    console.log("add book")
    this.router.navigate(['/authors/books/add'], { queryParams: { id: this.author()?.id }});
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.authorService.fetchSingleAuthor(this.id);
    });
  }
}
