import { Component } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorItemComponent } from '../author-item/author-item.component';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [AuthorItemComponent],
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.css'
})
export class AuthorsListComponent {
  constructor(public authorService: AuthorService){}
}
