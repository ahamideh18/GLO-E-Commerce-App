const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

app.post("/payment", async (req, res) => {
    const stripe = require('stripe')(functions.config().stripe.secretkey);
    const amount = req.body.amount;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "cad",
                    product_data: {
                        name: "GLO Clothing",
                    },
                    unit_amount: amount,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "https://glo-reactapp.web.app/",
        cancel_url: "https://glo-reactapp.web.app/checkout",
    });
    res.json({ id: session.id });
});
exports.payment = functions.https.onRequest(app);