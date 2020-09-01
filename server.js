const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

app.post("/payment", async (req, res) => {
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
        success_url: "https://localhst:3002/",
        cancel_url: "https://localhst:3002/checkout",
    });

    res.json({ id: session.id });
});