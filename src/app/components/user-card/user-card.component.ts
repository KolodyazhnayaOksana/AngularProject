import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  @Input() lastName: string;
  @Input() email: string;
  @Input() avatar: string;
  @Input() birthday: Data;

  ngOnInit() {
  }

}
