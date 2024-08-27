import { computed, Injectable, signal } from '@angular/core';
import { Author } from '../shared/models/Author';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Book } from '../shared/models/Book';
import { Environment } from '../shared/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly apiUrl = Environment.apiUrl + '/authors';
  private authorsSignal = signal<Author[]>([]);
  readonly authors = this.authorsSignal.asReadonly();
  private authorsViewSignal = signal<Author[]>([]);
  readonly authorsView = this.authorsViewSignal.asReadonly();
  private authorDetSignal = signal<any>({});
  readonly authorDet = this.authorDetSignal.asReadonly();
  limit = 5;

  constructor(private http: HttpClient) {}

  setAuthors(authors: Author[]): void{
    this.authorsSignal.set(authors);
  }

  setAuthorsView(authors: Author[]): void{
    this.authorsViewSignal.set(authors);
  }

  setAuthorsDet(author: Author, books: Book[]): void{
    this.authorDetSignal.set({author: author, books: books});
  }

  fetchAuthors(): void {
    if(this.authors().length > 0){
      return;
    }
    this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        tap((data) => {
          this.authorsSignal.set(data);
          this.changePage();
        }) // Update the signal with new data
      )
      .subscribe();
  }

  addAuthor(author: Author) {
    this.http
    .post(this.apiUrl, {author}).pipe(
      tap(data => {
        this.fetchAuthors();
      })
    ).subscribe();
  }

  fetchSingleAuthor(id: number): void {
    this.http
      .get<any>(this.apiUrl+"/"+id)
      .pipe(
        tap((data) => {
          console.log(data);
          if(data.author && data?.books){
            this.setAuthorsDet(data.author, data.books);
          }
        }) // Update the signal with new data
      )
      .subscribe();
  }

  changePage(page: number=1): void{
    const authors = this.authors().slice((page-1)*this.limit, ((page-1)*this.limit)+this.limit);
    this.setAuthorsView(authors);
  }
}
