import { Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../books/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-author-books-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-books-add.component.html',
  styleUrl: './author-books-add.component.css'
})
export class AuthorBooksAddComponent implements OnInit {
  id: String  = "";
  selectedFile: File | null = null;
  finished = signal(false);


  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  constructor(private route: ActivatedRoute, public bookService: BookService, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'].toString();
    });
  }

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    image: new FormControl('', [Validators.required])
  });

  submitForm(){
    const titleForm = this.addForm.get('title') as FormControl;
    const title: String = titleForm.value;
    const descriptionForm = this.addForm.get('description') as FormControl;
    const description: String = descriptionForm.value;
    this.finished.set(this.bookService.addBook({imageFile: this.selectedFile,title: title,description: description,author_id: this.id}));
  }


}
