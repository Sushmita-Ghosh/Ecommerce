import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe wants prices in cents
  const publishableKey =
    "pk_test_51IqfigSFy4MT5kSqzfLaOdTGvamAnIFUHFivPe65kWyoOH9fBxzn3cSt5x2m5CFgiyO55k8PDg8eACym3PcfEvG700D3qDYIvM";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
