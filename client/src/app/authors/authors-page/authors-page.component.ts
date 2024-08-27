import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorsListComponent } from '../authors-list/authors-list.component';
import { AuthorsPaginationComponent } from '../authors-pagination/authors-pagination.component';
import { AuthorAddComponent } from '../author-add/author-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-page',
  standalone: true,
  imports: [AuthorsListComponent, AuthorsPaginationComponent],
  templateUrl: './authors-page.component.html',
  styleUrl: './authors-page.component.css'
})
export class AuthorsPageComponent implements OnInit{
 constructor(private authorService: AuthorService, private router: Router){}

 addButton(): void{
  this.router.navigate(['/authors/add']);
 }

 ngOnInit(): void {
     this.authorService.fetchAuthors();
 }
}
