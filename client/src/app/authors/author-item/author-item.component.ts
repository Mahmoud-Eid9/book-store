import { Component, Input } from '@angular/core';
import { Author } from '../../shared/models/Author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-item',
  standalone: true,
  imports: [],
  templateUrl: './author-item.component.html',
  styleUrl: './author-item.component.css'
})
export class AuthorItemComponent {
  @Input() author?: Author

  constructor(private router: Router){}

  clickEvent(){
    this.router.navigate(['/authors/details'], { queryParams: { id: this.author?.id }});
  }
}
