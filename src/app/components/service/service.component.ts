import { Component, OnInit } from '@angular/core';
import { faCamera, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  faCode = faCode;
  faCamera = faCamera;
  faLaptopCode = faLaptopCode;
  constructor() { }

  ngOnInit(): void {
  }

}
