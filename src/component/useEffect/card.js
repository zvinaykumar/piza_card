import React,{useEffect,useState} from 'react';
import "./card.css";
import { Header } from './header';
import { Main } from './beaner';
import { Footer } from '../footer';





const Card = () => {
    const [users,setUser] = useState([]);

    const getCard = async ()=>{
        const response = await fetch('https://raw.githubusercontent.com/zvinaykumar/piza_json/main/piza.json')
        
        setUser(await response.json());
        console.log("code run")
    }
      useEffect(() => {
      getCard();
        
  },[]);
    
    
return (    
  <div>
    <div className="head">
    <Header/>
    <Main/>
    </div>
    <div className="card-box">
          {
            users.map((curElem)=>{
              return(
                    <div class="card" >
                        <img src={curElem.image_url} class="card-img" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{curElem.title}</h5>
                                <p class="card-text">{curElem.description}</p>
                                <a href="home" class="btn btn-primary">View All</a>
                            </div>
                        </div>                 
                        )                 
                      })               
          }
        
      </div>
                    <Footer/> 
      </div> 
    
    )
  }

export default Card;
