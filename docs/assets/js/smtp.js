alert('1');
console.log("HELLO");
function sendMail() {
    alert('Nice work');
}
const form = document.querySelector('.modal-body');
function sendEmail() {
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
        message => alert('Success')
    );
}

// form.addEventListener('submit', sendEmail);