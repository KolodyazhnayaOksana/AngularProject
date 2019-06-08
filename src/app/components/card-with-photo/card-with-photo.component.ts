import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-card-with-photo',
  templateUrl: './card-with-photo.component.html',
  styleUrls: ['./card-with-photo.component.css']
})
export class CardWithPhotoComponent implements OnInit {

  constructor() { }
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() button: string;
  ngOnInit() {
  }

}
