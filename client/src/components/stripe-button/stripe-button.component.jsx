import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';

const stripePromise = loadStripe('pk_test_51GvDkNBDHRwhBcsS9Pc0lCayoiCAMZd5LubvFeXlFd6sjGRK6nEVxDOqmd5u5VM2PSRpsPqi9yOIDfkqJjPA7dPl00avHpaF5Q');

const StripeCheckoutButton = ({ price }) => {
    const handleClick = async (event) => {
        const priceForStripe = price * 100;
        const stripe = await stripePromise;
        const response = await axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
            }
        })
        console.log(response)
        const session = await response.data;
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log("MAJOR ERRRRRRROR")
        }
    };

    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
};

export default StripeCheckoutButton;