alert('123');
console.log("HELLO");

const form = document.querySelector('.modal-body');

function sendEmail() {
    alert('Nice work UP');
    subject = document.querySelector('.subject-text'),
        email = document.querySelector('.email-text'),
        msgg = document.querySelector('.message-text')

    Email.send({
        Host: "smtp.gmail.com",
        Username: "amilasaad@gmail.com",
        Password: "Amilbangsa_2624",
        To: 'amilasaad@gmail.com',
        From: this.email.value,
        Subject: this.subject.value,
        Body: this.msgg.value
    }).then(
        alert('Success')
    );
}