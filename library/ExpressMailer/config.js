var environment =  process.env.NODE_ENV || 'test';

var config = {
  development: {
    mailer: {
      from: 'revelsoft.mittraphap@gmail.com',
      host: 'smtp.gmail.com', // hostname
      secureConnection: true, // use SSL
      port: 465, // port for secure SMTP
      auth: {
        user: 'revelsoft.mittraphap@gmail.com' ,
        pass: 'revelsoftlnw'
      }
    },
    mailerUpdate: {
      from: 'support@revelsoft.co.th',
      host: 'mail.revelsoft.co.th', // hostname
      secureConnection: true, // use SSL
      port: 465, // port for secure SMTP
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    }
  },
  test: {
    mailer: {
      from: 'support@revelsoft.co.th',
      host: 'mail.revelsoft.co.th', // hostname
      secureConnection: true, // use SSL
      port: 465, // test port for secure SMTP
      auth: {
        user: 'support@revelsoft.co.th',
        pass: 'support123456'
      }
    },
    mailerUpdate: {
      from: 'support@revelsoft.co.th',
      host: 'mail.revelsoft.co.th', // hostname
      secureConnection: true,
      port: 8465,
      auth: {
        user: 'TestApplication',
        pass: 'TestApplication'
      }
    }
  }
};

exports = module.exports = config[environment];