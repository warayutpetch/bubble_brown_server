const Pusher = require('pusher');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    const pusher = new Pusher({
      appId: '933947',
      key: 'def17c9634c093c2935d',
      secret: '653111250a05509812ec',
      cluster: 'ap1',
      useTLS: true
    });
    app.set('PORT', process.env.PORT || 5002);

    app.post('/message', (req, res) => {
      const payload = req.body;
      console.log("payload:",payload);
      
      pusher.trigger('chat', 'message', payload);
      res.send(payload)
    });

    app.listen(app.get('PORT'), () => 
      console.log('Listening at ' + app.get('PORT')))