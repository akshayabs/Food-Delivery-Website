import React ,{useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Category from '../components/UI/category/Category';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import products from '../assets/fake-data/products.js'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';



const featureData = [
  {
    title: 'Delivery partner',
    imgUrl:featureImg01,
    desc: "Our delivery partners are dedicated to prompt and secure deliveries, ensuring your satisfaction with every order."
  },
  {
    title: 'Quick Delivery',
    imgUrl:featureImg02,
    desc: "Need it fast? We've got your back. Lightning-fast delivery at your fingertips with our speedy app."
  },
  {
    title: 'Easy Pick Up',
    imgUrl:featureImg03,
    desc: "Simplify your mealtime routine with quick orders and easy pick-up. Our app streamlines the process, so you can enjoy your favorite dishes with minimal hassle."
  },
]

const Home = () => {
  
   const [category,setCategory]=useState('ALL')
   const [allProducts,setAllProducts]=useState(products)
   const [hotPizza,setHotPizza] = useState([])

   useEffect(()=>{ 
     const filteredPizza = products.filter(item=> item.category === 'Pizza')
     const slicePizza = filteredPizza.slice(0,4)
     setHotPizza(slicePizza)
   },[])

  useEffect(()=>{
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return <Helmet title="Home"> 
  <section>
  <Container>
  <Row>
  <Col lg='6' md='6'>
  <div className='hero__content'>
  <h5 className='mb-3'>Easy way to make an order</h5>
  <h1 className='mb-4 hero__title'><span>Hungry?</span> We've Got You <span> Covered!</span>
  </h1>
  <p>
  "From kitchen to doorstep, taste delivered with a tap.
   Enjoy convenience and culinary delights with our seamless delivery app."
   </p>

   <div className="hero__btns d-flex align-items-center gap-5
   mt-4">
   <Link to="/foods"><button className='order__btn d-flex align-items-center
     justify-content-between'>Order now <KeyboardArrowRightIcon/></button></Link>

     <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
   </div>

   <div className=' hero__service d-flex align-items-center gap-5 mt-5'>
   <p className='d-flex align-items-center gap-2'>
   <span className='shipping__icon'><DirectionsCarIcon/></span>{" "}No shipping charge
   </p>
   <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-shield-check-line"></i></span>100% secure checkout</p>
   </div>
  </div>
  </Col>

  <Col lg='6' md='6'>
  <div className='hero__img'>
  <img src={heroImg} alt='hero-img' className='w-100'/>
  </div>
  </Col>

  </Row>
  </Container>
  </section>


  <section className='pt-0'>
    <Category/>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
        <h5 className='feature__subtitle mb-4'>What we serve</h5> 
        <h2 className='feature__title'>Just sit back and relax</h2>
        <h2 className='feature__title'>
          we will <span>take care</span>
        </h2>
        <p className='mb-1 mt-4 feature__text'>
        "Discover a world of flavors, delivered to you. Elevate your dining experience with our intuitive delivery app."
        </p>
        </Col>
        {
          featureData.map((item,index)=>(
            <Col lg='4' md='6' sm='6' key={index} className='mt-5'>  
            <div className='feature__item text-center px-5 py-3'>
              <img 
              src={item.imgUrl} 
              alt="feature-img"
              className='w-25 mb-3'
            />
              <h5 className='fw-bold mb-3'>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </Col>
          ))
        }     
      </Row>
    </Container>
    </section>
  <section>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2>Popular Foods</h2>
        </Col>

        <Col lg='12'>
      <div className='food__category d-flex align-items-center justify-content-center gap-4'>
          <button
          className={`all__btn  ₹{
            category === "ALL" ? "foodBtnActive" : ""
          } `}
          onClick={() => setCategory("ALL")}
        >
          All
        </button>
        <button
        className={`d-flex align-items-center gap-2 ₹{
          category === "BURGER" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("BURGER")}
      >
        <img src={foodCategoryImg01} alt="" />
        Burger
      </button>

      <button
        className={`d-flex align-items-center gap-2 ₹{
          category === "PIZZA" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("PIZZA")}
      >
        <img src={foodCategoryImg02} alt="" />
        Pizza
      </button>

      <button
        className={`d-flex align-items-center gap-2 ₹{
          category === "BREAD" ? "foodBtnActive" : ""
        } `}
        onClick={() => setCategory("BREAD")}
      >
        <img src={foodCategoryImg03} alt="" />
        Bread
      </button>
    </div>
        </Col>
        {allProducts.map(item=>(
            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'> 
            <ProductCard item={item}/>
          </Col>
          ))
        }
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <img src={whyImg} alt='why-starvy' className='w-100'/>
        </Col>
        <Col lg='6' md='6'>
           <div className='why__starvy'>
              <h2 className='starvy-title mb-4'>Why <span>Stravy?</span></h2>
              <p>Choose this app for effortless food ordering and delightful dining experiences.
               With a seamless interface and reliable service, we're here to simplify your mealtime cravings, every time.
               </p>
               <ListGroup className='mt-5'>
                 <ListGroupItem className='border-0 ps-0'>
                 <p className=' choose__us-title d-flex align-items-center gap-2'><CheckCircleIcon className='check'/>
                 Freash and Tasty Foods</p>
                 <p className='starvy__desc'>Savor the flavor of freshness with our delectable array of handcrafted dishes,
                  prepared with care and bursting with taste. Experience a feast for the senses as you explore our menu filled with vibrant ingredients and mouthwatering flavors.</p>
                 </ListGroupItem>

                 <ListGroupItem className='border-0 ps-0'>
                 <p className='  choose__us-title d-flex align-items-center gap-2'><CheckCircleIcon className='check'/>Quality support</p>
                 <p className='starvy__desc'>Count on our team for quality support that goes above and beyond, ensuring your experience is seamless and satisfying. With personalized assistance and prompt responses,
                  we're here to address your needs and exceed your expectations.</p>
                 </ListGroupItem>

                 <ListGroupItem className='border-0 ps-0'>
                 <p className='  choose__us-title d-flex align-items-center gap-2'><CheckCircleIcon className='check'/>Order from any location</p>
                 <p className='starvy__desc'>Ordering is a breeze from anywhere with our app, allowing you to indulge in your favorite meals no matter where you are. 
                 Whether you're at home, work, or on the go, our convenient platform ensures that delicious food is just a few taps away.</p>
                 </ListGroupItem>
               </ListGroup>
           </div>
        </Col>
      </Row>
    </Container>
  </section>

 









  <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                Absolutely love Starvy! 
                 The real-time order tracking feature is a game-changer,
                  I always know exactly when to expect my food.
                   Plus, the delivery drivers are consistently friendly and professional. 
                   Overall, a fantastic experience every time I use it!"
                </p>
                <TestimonialSlider/>               
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
}

export default Home