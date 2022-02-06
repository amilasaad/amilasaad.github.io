import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
