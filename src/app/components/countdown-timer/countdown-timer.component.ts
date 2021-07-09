import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnChanges {
  private countDownTime: number;
  private timerNumerics = {
    milliseconds: 1000,
    minutesInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24
  };

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }


  constructor() { }

  lifecycleTicks = 0;

  ngOnChanges(): void {
    console.log(this.seconds);
  }


  @HostListener('change', [ '$event' ])
  onChange(event: any): void {
    console.log(event);
    console.log('Change......');
}



  get days(): string {
    const { milliseconds, minutesInHours, minutesInSeconds, hoursInDay } = this.timerNumerics;
    const days = Math.floor(this.getTimeDifference() / (
      milliseconds * minutesInHours * minutesInSeconds * hoursInDay
    ));

    return this.formatTime(days);
  }

  get hours(): string {
    const { milliseconds, minutesInSeconds, minutesInHours, hoursInDay } = this.timerNumerics;
    const hours = Math.floor(
      (this.getTimeDifference() % (hoursInDay * minutesInHours * minutesInSeconds * milliseconds)) /
      (minutesInHours * minutesInSeconds * milliseconds));

    return this.formatTime(hours);
  }


  get minutes(): string {
    const { milliseconds, minutesInSeconds, minutesInHours } = this.timerNumerics;
    const minutes = Math.floor((this.getTimeDifference() %
      (milliseconds * minutesInSeconds * minutesInHours))
      / (minutesInSeconds * milliseconds));

    return this.formatTime(minutes);
  }

  get seconds(): string {
    const { milliseconds, minutesInSeconds } = this.timerNumerics;
    const seconds = Math.floor((this.getTimeDifference() %
      (milliseconds * minutesInSeconds)) / milliseconds);

    return this.formatTime(seconds);
  }


  private getTimeDifference(): number {
    const currentTime = new Date().getTime();

    return this.countDownTime - currentTime;
  }


  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
