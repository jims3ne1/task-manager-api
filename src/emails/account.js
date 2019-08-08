const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jimbo.cortes@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellatioEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jimbo.cortes@gmail.com',
        subject: 'We are sad to see you go.',
        text: `Hi ${name}, \n\n We appreciate if you could send us a feedback.`

    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellatioEmail
}