import React from 'react';
import bainner from '../images/bainner.png'
import "./beaner.css"


export const Main=()=>(
    <div class="online-order">
        <div class="banner-text">
        <h1 class="order-heading">Domino's online ordering</h1>  
        <p class="deliver-message" id="delivery-text">Yummy pizza delivered fast &amp; fresh</p>
        <a href="/" onclick="/">
          <button>ORDER ONLINE NOW</button>
        </a>
        <img class="banner" src ={bainner} alt="loading..."></img>           
        </div>  
    </div>
);