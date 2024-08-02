import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.temp);
  }
  constructor() {}
  title = 'angular-concepts';

  @ViewChild('template', { read: TemplateRef }) temp!: TemplateRef<any>;
}
