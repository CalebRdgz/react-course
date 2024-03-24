import React, { useState } from "react";

function MyComponent2() {
  //create name variable, default "Guest"
  const [name, setName] = useState("Guest");
  //create an input element for a number:
  const [quantity, setQuantity] = useState(1);
  //create comment variable for user leaving a comment:
  const [comment, setComment] = useState("");

  //create payment variable to change the payment state:
  const [payment, setPayment] = useState("");

  const [shipping, setShipping] = useState("Delivery");

  //handle the name change:
  function handleNameChange(event: any) {
    setName(event.target.value);
  }
  //handle quantity change:
  function handleQuantityChange(event: any) {
    setQuantity(event.target.value);
  }

  //handle the comment change:
  function handleCommentChange(event: any) {
    setComment(event.target.value);
  }

  //handle the payment change:
  function handlePaymentChange(event: any) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event: any) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>
      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      ></input>
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>

      <p>Payment: {payment}</p>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping == "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping == "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent2;
