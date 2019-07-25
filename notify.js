
exports.helloPubSub = (event, context) => {
    const pubsubMessage = event.data;
    const mailgun = require("mailgun-js");
    const APIKEY  = 'cdd25755c3fe998c3930c091b4df8402-c50f4a19-995fe1ba';
    const DOMAIN  = 'https://api.mailgun.net/v3/sandbox8f428ac7f6dc47a7a8140f970d7213b6.mailgun.org';
    const mg      = mailgun({apiKey:APIKEY, domain: DOMAIN});
    const data    = {
        from: 'anudeepreddyn1@gmail.com',
        to: 'anudeep.reddy@capgemini.com',
        subject: 'sending build status',
        text: `Testing from mailgun ${pubsubMessage}`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });  };
  

