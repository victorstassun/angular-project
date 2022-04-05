import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ProductsService, private location: Location) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      description: [null, [Validators.minLength(10), Validators.maxLength(300)]],
      imageUrl: [null]
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log("Submit")
      this.service.create(this.form.value).subscribe(
        succes => {
          console.log('succes')
          this.location.back();
        },
        error => console.error(error),
        () => console.log("request finished")
      );
    }
  }

  onCancel() {
    this.submitted = true;
    this.form.reset;
    console.log("Cancel")
  }

}
