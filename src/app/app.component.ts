import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.temp);
  }
  title = 'angular-concepts';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')],
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }

  @ViewChild('template', { read: TemplateRef }) temp!: TemplateRef<any>;
}
