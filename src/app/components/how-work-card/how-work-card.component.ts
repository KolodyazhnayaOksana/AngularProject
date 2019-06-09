import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-how-work-card',
  templateUrl: './how-work-card.component.html',
  styleUrls: ['./how-work-card.component.css']
})
export class HowWorkCardComponent implements OnInit {
  constructor() { }
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() isSmall: boolean;
  ngOnInit() {
  }

}
