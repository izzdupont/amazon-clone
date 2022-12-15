import React from 'react';
import './Home.css';
import pic from './pic.jpg';
import Product from './Product';
import axios from 'axios';
import { StateProvider, useStateValue } from "./StateProvider";

console.log(pic);
const api = axios.create({
    baseURL: `http://localhost:3306/amazon-warehouse/product`
})

function Home() {
    const [product, getProduct] = useStateValue({});
    const [error, setError] = useStateValue('');

  //  React.useInsertionEffect(async () => {
  //      try {
  //          const data = await axios.get('http://localhost:3306/amazon-warehouse/product/');

  //          getProduct(data.data?.results)
 //       } catch (e) {
 //           setError('Something went wrong.')
 //       }

  //  }, [])

//{product.length
//(
  //  <>
    //    {product.map((product) => (
      //      <Product
       //     />
      //  ))}
  //  </>
//)
//} 

  return (
    <div classname='home'>
        
        <div className="home__container">
            <img
            className="home__image"
            src={"amazon.jpg"} alt="pic" />;
        </div>

        <div className="home__row">
        
        
            <Product 
                id="12321341"
                title="PlayStation 5 Console"
                price={499.99}
                rating={5}
                image="ps5.jpg"
            />
            <Product
                id="49538094"
                title="Solo Stove Mesa Tabletop Fire Pit with Stand | Low Smoke Outdoor Mini Fire for Urban & Suburbs | Fueled by Pellets or Wood, Safe Burning, Stainless Steel, with Travel Bag, 6.9 x 5.1 in, 1.4lbs, Water"
                price={239.0}
                rating={4}
                image="fire.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="4903850"
                title="6Ft Artificial Christmas Tree with USB String Lights & Remote & Timer, 240 LED 8 Lighting Modes 850 Branches Tips Metal Base Stand- Detachable Fake Christmas Tree Holiday Christmas Party Decorations"
                price={109.99}
                rating={4}
                image="tree.jpg"
            />
            <Product
                id="23445930"
                title="Shure SM7B Vocal Dynamic Microphone + Gator 3000 Boom Stand for Broadcast, Podcast & Recording, XLR Studio Mic for Music & Speech, Wide-Range Frequency, Warm & Smooth Sound, Detachable Windscreen"
                price={499.00}
                rating={5}
                image="mic.jpg"
            />
            <Product
                id="3254354345"
                title="LEVOIT Air Purifiers for Home Large Room, Smart WiFi and PM1/PM2.5/PM10 Monitor, H13 True HEPA Filter Captures 99.99% of Particles, Pet Allergies, Smoke, Dust, Auto Mode, Alexa Control, 1395 Sq. Ft"
                price={398.99}
                rating={5}
                image="airp.jpg"
            />
        </div>
    
        <div className="home__row">
            <Product
                id="90829332"
                title="Bartesian Premium Cocktail and Margarita Machine for the Home Bar with Push-Button Simplicity and an Easy to Clean Design (55300)"
                price={294.98}
                rating={4}
                image="drink.jpg"
            />
              <Product
                id="3254354345"
                title="Echo Dot (5th Gen) | Charcoal with Sengled Bluetooth Color bulb | Alexa smart home starter kit"
                price={64.98}
                rating={4}
                image="echo.jpg"
            />
        </div>
        
    </div>
  )
}

export default Home
