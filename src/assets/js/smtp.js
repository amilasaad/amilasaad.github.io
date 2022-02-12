console.log('Running ......');
const form = document.querySelector('.modal-body');

function sendEmail() {
    alert('Nice work UP');
    senderName = document.querySelector('.name-text'),
        subject = document.querySelector('.subject-text'),
        email = document.querySelector('.email-text'),
        msgg = document.querySelector('.message-text')

    Email.send({
        Host: "smtp.gmail.com",
        Username: "amilasaad@gmail.com",
        Password: "ezimdkvfvobwugkp",
        To: this.email.value,
        From: this.senderName.value,
        Subject: this.subject.value,
        Body: this.msgg.value
    }).then(
        console.log('successfully sent email')
    );
}