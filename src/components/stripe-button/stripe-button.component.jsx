import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import trophyFillComp from '../../assets/trophyFillComp.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GvDkNBDHRwhBcsS9Pc0lCayoiCAMZd5LubvFeXlFd6sjGRK6nEVxDOqmd5u5VM2PSRpsPqi9yOIDfkqJjPA7dPl00avHpaF5Q';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='GLO Sports'
        billingAddress
        shippingAddress
        image={trophyFillComp}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;