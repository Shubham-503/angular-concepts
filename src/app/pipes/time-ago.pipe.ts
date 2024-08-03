import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe implements PipeTransform {
  transform(events: Date[]): string[] {
    return events.map((event) => this.getTimeAge(event));
  }

  getTimeAge(date: Date): string {
    const now = new Date();
    const seconds = Math.floor(
      (now.getTime() - new Date(date).getTime()) / 1000
    );
    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
    for (const i in intervals) {
      const interval = intervals[i];
      const count = Math.floor(seconds / interval);
      if (count > 0) {
        return `${count} ${i}${count > 1 ? 's' : ''}`;
      }
    }
    return 'just now';
  }
}
