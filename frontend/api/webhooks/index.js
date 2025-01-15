import { Webhook } from 'svix';  // Make sure to install the `svix` package
import bodyParser from 'body-parser'; // Ensure bodyParser is imported for handling the raw payload

app.post('/api/webhooks', 
  // This is a generic method to parse the contents of the payload.
  bodyParser.raw({ type: 'application/json' }),

  async (req, res) => {
    const SIGNING_SECRET = process.env.SIGNING_SECRET;

    if (!SIGNING_SECRET) {
      throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env');
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET);

    // Get headers and body
    const headers = req.headers;
    const payload = req.body;

    // Get Svix headers for verification
    const svix_id = headers['svix-id'];
    const svix_timestamp = headers['svix-timestamp'];
    const svix_signature = headers['svix-signature'];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return res.status(400).json({
        success: false,
        message: 'Error: Missing svix headers',
      });
    }

    let evt;

    // Attempt to verify the incoming webhook
    try {
      evt = wh.verify(payload, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      });
    } catch (err) {
      console.log('Error: Could not verify webhook:', err.message);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    // Do something with payload
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
    console.log('Webhook payload:', evt.data);

    if (evt.type === 'user.created') {
      console.log('userId:', evt.data.id)
    }

    if (evt.type === 'user.updated') {
      console.log('user is updated:', evt.data.id)
    }

    return res.status(200).json({
      success: true,
      message: 'Webhook received',
    });
  }
);
