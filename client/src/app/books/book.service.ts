import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Book } from '../shared/models/Book';
import { tap } from 'rxjs';
import { AuthorService } from '../authors/author.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly apiUrl = 'http://localhost:8000/books';
  private booksSignal = signal<Book[]>([]);
  readonly books = this.booksSignal.asReadonly();
  private booksViewSignal = signal<Book[]>([]);
  readonly booksView = this.booksViewSignal.asReadonly();
  private singBookSignal = signal(new Book(0, "", "", "", "", 0));
  readonly singBook = this.singBookSignal.asReadonly();
  limit = 12;



  constructor(private http: HttpClient, private authorService: AuthorService) {}

  setBooks(books: Book[]) {
    this.booksSignal.set(books)
  }

  setBooksView(books: Book[]) {
    this.booksViewSignal.set(books)
  }

  setSingBook(book: Book) {
    this.singBookSignal.set(book)  ;
  }

  fetchBooks(): void {
    this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        tap((books) => {
          this.setBooks(books);
          this.setBooksView(books);
          this.changePage();
        }) // Update the signal with new data
      )
      .subscribe();
  }


  addBook(book: any): boolean{
    if (book.imageFile) {
      const formData = new FormData();
      formData.append('file', book.imageFile, book.imageFile.name);
      formData.append('title', book.title);
      formData.append('description', book.description);
      formData.append('author_id', book.author_id);

      this.http
      .post(this.apiUrl, formData)      
      .pipe(
        tap(() => {
          
        }) // Update the signal with new data
      )
        .subscribe();
        return true;
    }
    return false;
  }



  changeFilter(books: Book[]){
    this.setBooksView(books);
  }

  changePage(page: number=1): void{
    const booksView = this.books().slice((page-1)*this.limit, ((page-1)*this.limit)+this.limit);
    this.setBooksView(booksView);
  }

  searchBook(query: String): void {
    if(query === ""){
      this.changePage();
      return;
    }
    this.http
      .get<any[]>(this.apiUrl + "/search?search=" + query)
      .pipe(
        tap((books) => {
          this.setBooksView(books);
        }) // Update the signal with new data
      )
      .subscribe();
  }

  deleteBook(book: Book): void {
    const id = book.author_id;
     this.http.delete<any>(this.apiUrl, {
      body: {
        book: book
      }, // JSON body to be sent with the DELETE request
    }).pipe(
      tap((books) => {
        this.authorService.fetchSingleAuthor(id);
      }) // Update the signal with new data
    ).subscribe();
  }

  editBook(book: any): boolean{
    const formData = new FormData();
    let finished = false;
    if (book.imageFile) {
      formData.append('file', book.imageFile, book.imageFile.name);
    }
      formData.append('title', book.title);
      formData.append('description', book.description);
      formData.append('author_id', book.author_id);
      formData.append('id', book.id);

      this.http
      .put(this.apiUrl, formData)      
      .pipe(
        tap(() => {
          
        }) // Update the signal with new data
      )
        .subscribe(() => {
          finished = true;
        });
    return true;;
  }

  fetchSingleBook(id: number): void{
    this.http
    .get<any>(this.apiUrl+"/"+id)
    .pipe(
      tap((data) => {
        console.log(data);
          this.setSingBook(data[0]);
          console.log(this.singBook())
      }) // Update the signal with new data
    )
    .subscribe();
  }
}
