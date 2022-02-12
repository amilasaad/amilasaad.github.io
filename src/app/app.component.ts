import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as nodemailer from 'nodemailer';
declare const sendEmail: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amilbangsa';
  closeResult = '';
  private transporter!: nodemailer.Transporter;
  subject = document.querySelector('.subject-text');
  email = document.querySelector('.email-text');
  msgg = document.querySelector('.message-text');

  sendMail() {
    sendEmail();
  }
  // onSubmit(contactForm: NgForm) {
  //   if (contactForm.valid) {
  //     const email = contactForm.value;
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     this.http.post('https://formspree.io/asdlf7asdf',
  //       { name: email.name, replyto: email.email, message: email.messages },
  //       { 'headers': headers }).subscribe(
  //         response => {
  //           console.log(response);
  //         }
  //       );
  //   }
  //}

  constructor(private modalService: NgbModal) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
}
