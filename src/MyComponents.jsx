import React, { useState } from "react"

function MyComponents(){

    const [name, setName]  = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function handleName(event){
        setName(event.target.value);
    }

    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }
    
    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return( <>
                <div>
                    <input value={name} onChange={handleName} placeholder="Enter name"/>
                    <p>Name: {name}</p>

                    <input value={quantity} onChange={handleQuantity} type="number" placeholder="Enter Quantity"/>
                    <p>Quantity: {quantity}</p>

                    <textarea value={comment} onChange={handleComment} placeholder="Enter Delivery Instructions" />
                    <p>Comment: {comment}</p>

                    <select value={payment} onChange={handlePayment}>
                        <option>Select an payment option</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="Rupay">Rupay</option>
                        <option value="UPI">UPI</option>
                        <option value="GiftCard">GiftCard</option>
                    </select>
                    <p>Payment Option: {payment}</p>

                    <label>
                        <input type="radio" Value="Pick Up" checked={ shipping === "Pick Up"} onChange={handleShipping} />
                        Pick Up
                    </label>
                    <br/>
                    <label>
                        <input type="radio" Value="Home Delivery"  checked={ shipping === "Home Delivery"} onChange={handleShipping} />
                        Home Delivery
                    </label>
                    <p>Shipping: {shipping}</p>

                </div>
            </>);


}

export default MyComponents