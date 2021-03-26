import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import {containerVariants,nextVariants,buttonVariants} from './variants'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial='initial'
    animate='animate'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{ scale: 1.1, 
              originX:0/* لكي لا يكون التكبير للخلف ولكن يبدأ من نقطة البداية*/
              , color:'orange'}}
              transition={{ type:'spring', stiffness:300/* الارتجاج */}}
              >



              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
           variants={buttonVariants }
           whileHover= 'hover'
           animate='animate'>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;