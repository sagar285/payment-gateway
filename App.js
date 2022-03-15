import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
       <div className="payment">
         <div className="paymentmehtod ">payment method</div><hr/>
         <p>Credit Card</p>
         <div className="Creditcard">
         <div className="cardimage"></div>
           <input type="text" value="Card Number" palceholder="6521-6012 3145 0000"/>
         </div>
         <div className="month">
         <input type="text" value="mm/yy" palceholder="07/24"/>
         <input type="text" value="Security code" palceholder="321" className="securitycode"/>
         <div className="securityimage"></div>
       </div>
       <div className="payornot"></div>
       <button className="pay">Review Order</button>
       <button className="cancel">Cancel</button>
       <p className="netbanking">Net Banking</p>
       <div className="radio">
       <input type="radio" /><p>state bank of india</p>
         <input type="radio" /><p>HDFC BANK</p>
         <input type="radio" /><p>ICICI BANK</p>
         <input type="radio" /><p>Other bank</p>
       </div>
       <p>we will redirecting  to your payment provider's website so you can complete the purchase</p>
       <button className="save">Save & Continue</button><hr></hr>
       <div className="paytm">
        <p>PAYTM</p>
        We'll redirect you to your payment provider's website so you can complete the purchase<br></br>
        <button className="ptmbtn">Save &Continue </button><hr></hr>
       </div>
       <div className="eballet ">
       <p className="wallet">eWallet</p>
       <input type="radio" /><p>Mobikwik</p>
         <input type="radio" /><p>FreeChargeK</p>
         <input type="radio" /><p>Other eWallets</p>
         <p>We'll redirect you to your payment provider's website so you can complete the purchase</p>
         <button className="save">Save & Continue</button><hr></hr>
       </div>
       <p>Debit Card</p>
         <div className="Creditcard">
         <div className="cardimage"></div>
           <input type="text" value="Card Number" palceholder="6521-6012 3145 0000"/>
         </div>
         <div className="month">
         <input type="text" value="mm/yy" palceholder="07/24"/>
         <input type="text" value="Security code" palceholder="321" className="securitycode"/>
         <div className="securityimage"></div>
       </div>
       <div className="payornot"></div>
       <button className="pay">Review Order</button>
       <button className="cancel">Cancel</button>
       <div className="UPI">UPI
         <p className="vpa ">virtual payment adress</p>
         <input type="text" palceholder="example@bank" className="upiid"/>
         <p>When you complete your purchase, you will receive a payment request from CCAvenue in your UPI payment app. Authorize and confirm the request to complete payment.</p>
         
       <button className="pay">Review Order</button>
       <button className="cancel">Cancel</button>
       </div>
       </div>
      
      </div>
    </>

  );
}

export default App;
