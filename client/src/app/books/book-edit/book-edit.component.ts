import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  id: number = 0;
  title: string = "" ;
  description: string = "" ;
  image: string = "" ;
  selectedFile: File | null = null;
  finished = signal(false);
  
  constructor(private route: ActivatedRoute, private bookService: BookService) {}


  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    image: new FormControl('',)
  });

  submitForm(){
    const titleForm = this.editForm.get('title') as FormControl;
    const title: string = titleForm.value;
    const descriptionForm = this.editForm.get('description') as FormControl;
    const description: string = descriptionForm.value;
    this.finished.set(this.bookService.editBook({id: this.id, title: title, description: description, imageFile: this.selectedFile}));
    console.log(this.finished());
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.description = params['description'];
      this.image = params['image'];
      this.id = params['id'];
      console.log(this.image);
    });
    this.editForm.get('title')?.setValue(this.title);
    this.editForm.get('description')?.setValue(this.description);
  }
}
