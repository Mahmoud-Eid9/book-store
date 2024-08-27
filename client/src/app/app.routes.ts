import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsPageComponent } from './authors/authors-page/authors-page.component';
import { AuthorAddComponent } from './authors/author-add/author-add.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { AuthorBooksAddComponent } from './authors/author-books-add/author-books-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

export const routes: Routes = [
    {path: 'authors', component: AuthorsPageComponent, title: 'Authors'},
    {path: 'authors/add', component: AuthorAddComponent, title: 'Add Author'},
    {path: 'authors/details', component: AuthorDetailsComponent, title: 'Author Details'},
    {path: 'authors/books/add', component: AuthorBooksAddComponent, title: 'Add Book'},
    {path: 'authors/book/edit', component: BookEditComponent, title: 'Edit Book'},
    {path: 'books/details', component: BookDetailsComponent, title: 'Book Details'},
    {path: '', component: HomeComponent, title: 'Home'}
];
