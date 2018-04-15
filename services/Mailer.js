const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail
{
    constructor({ subject, reciepients }, content) {
        super();

        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('test/html', content);
        this.recipients = this.formatAddresses(reciepients);
    }
}

module.exports = Mailer;