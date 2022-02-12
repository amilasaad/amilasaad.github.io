console.log('Running ...');
const form = document.querySelector('.modal-body');

function sendEmail() {
    alert('Nice work UP');
    subject = document.querySelector('.subject-text'),
        email = document.querySelector('.email-text'),
        msgg = document.querySelector('.message-text')

    Email.send({
        Host: "smtp.gmail.com",
        Username: "amilasaad@gmail.com",
        Password: "ezimdkvfvobwugkp",
        To: 'amilasaad@gmail.com',
        From: "amilasaad@gmail.com",
        Subject: "amilasaad@gmail.com",
        Body: "amilasaad@gmail.com"
    }).then(
       console.log('successfully sent email')
    );
}