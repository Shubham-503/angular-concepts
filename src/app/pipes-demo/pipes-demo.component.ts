import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable, of, delay, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent {
  today: Date = new Date();
  price: number = 1234.56;
  percentage: number = 0.85;

  message: string = 'Greetings from Shubham';
  AsyncMessage$: Observable<string> = of(
    'Async message using asyc pipe after delay'
  ).pipe(delay(2000));

  longMessage =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere perferendis quidem beatae aut distinctio exercitationem? Quaerat fuga cum facere minus exercitationem cupiditate necessitatibus mollitia animi, blanditiis est velit dolores obcaecati alias ipsam consectetur, atque ullam nulla provident? Facere enim architecto omnis fugit praesentium natus suscipit non officia sequi. Eius! ';

  events: Date[] = [];

  addEvent() {
    this.events.push(new Date());
  }
}
