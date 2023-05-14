import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website_amil';

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
