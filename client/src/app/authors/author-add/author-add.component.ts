import { Component } from '@angular/core';
import {  FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';
import { Author } from '../../shared/models/Author';

@Component({
  selector: 'app-author-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {

  constructor(private authorService: AuthorService){}

  addForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderBio: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  


  submitForm(){
    const nameForm = this.addForm.get('senderName') as FormControl;
    const name: String = nameForm.value;
    const emailForm = this.addForm.get('senderEmail') as FormControl;
    const email: String = emailForm.value;
    const bioForm = this.addForm.get('senderBio') as FormControl;
    const bio: String = bioForm.value;
    const author = new Author(0, name, email, bio);
    console.log(author);
    this.authorService.addAuthor(author);
  }
}
