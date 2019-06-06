import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  public result: number;
  public form: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      a: this.fb.control('', [Validators.required]),
      h: this.fb.control('', [Validators.required]),
    });
  }

  square() {
    this.result = 0.5 * this.form.value.a * this.form.value.h;
  }
}
