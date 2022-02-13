console.log('Running ...');

function sendEmail() {
    subject = document.querySelector('.subject-text'),
        email = document.querySelector('.email-text'),
        msgg = document.querySelector('.message-text')

    Email.send({
        Host: "smtp.gmail.com",
        Username: "amilasaad@gmail.com",
        Password: "ezimdkvfvobwugkp",
        To: 'amilasaad@gmail.com',
        From: this.email.value,
        Subject: this.subject.value,
        Body: this.msgg.value
    }).then(
       console.log('successfully sent email')
    );
}