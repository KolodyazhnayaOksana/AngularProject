import {Component} from '@angular/core';
import {NgAnimateScrollService} from 'ng-animate-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private animateScrollService: NgAnimateScrollService) {
  }

  navigateToHeader(duration?: number) {
    this.animateScrollService.scrollToElement('header', duration);
  }
}
