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
                title="TPlayStation 5 Console"
                price={499.99}
                rating={5}
                image="/ps5.jpg"
            />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="4903850"
                title="6Ft Artificial Christmas Tree with USB String Lights & Remote & Timer, 240 LED 8 Lighting Modes 850 Branches Tips Metal Base Stand- Detachable Fake Christmas Tree Holiday Christmas Party Decorations"
                price={89.77}
                rating={4}
                image="tree.jpg"
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
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
