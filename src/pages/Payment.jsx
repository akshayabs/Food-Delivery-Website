import React,{useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import {Container,Row,Col} from "reactstrap";
import { Link } from 'react-router-dom';

const Payment = () => {
  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signupEmailRef = useRef()

  const submitHandler = e=>
  {
    e.preventDefault();
    if (signupNameRef.current.value && signupPasswordRef.current.value) {
      alert("Registered Successfully");
      
    } else {
      alert("Please fill in both email and password fields");
    }

  };

  return <Helmet title='Payment'>
   <CommonSection title='Pay Now'/>
   <section>
     <Container>
      <Row>
       <Col lg='6' md='6' sm='12' className='m-auto text-center'>
        <form className='form mb-5' onSubmit={submitHandler}>
        <div class="form__group">
        <h5>Pay using credit or debit card</h5><br/>
        <div class="card-num-field-group">
        <label>Card Number</label><br/>
        <input type="Number" class="card-num-field" placeholder="xxxx-xxxx-xxxx-xxxx" pattern='[1-9]|16'/>
        </div>
        <br/>
        
        <div class="form__group">
        <label>Expiry Date</label><br/>
        <input type="number" class="date-field" placeholder="mm" min="1" max="2"/>
        <input type="number" class="date-field" placeholder="yyyy"/>
        </div>
        
        <div class="form__group">
        <label>CVC</label><br/>
        <input type="number" class="cvc-field" placeholder="xxx"/>
        </div>
            
        <div class="form__group">
        <label>Card Holder Name</label><br/>
        <input type="text" class="name-field" placeholder="Full Name"/>
        </div>
        
        <Link to="/pay"><button type="button" class="addTOCart__btn">Pay Now</button></Link>
        </div>
    
        </form>
       </Col>
      </Row>
     </Container>
   </section>
  </Helmet>
}

export default Payment