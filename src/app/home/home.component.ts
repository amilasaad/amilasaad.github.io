import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('readMore') readMore!: ElementRef;
  @ViewChild('dots') dots!: ElementRef;
  @ViewChild('more') more!: ElementRef;

  readMoreFun() {
    if (this.dots.nativeElement.style.display === "none") {
      this.dots.nativeElement.style.display = "inline";
      this.readMore.nativeElement.innerHTML = "Read more";
      this.more.nativeElement.style.display = "none";
    } else {
      this.dots.nativeElement.style.display = "none";
      this.readMore.nativeElement.innerHTML = "Read less";
      this.more.nativeElement.style.display = "inline";
    }
  }
}
