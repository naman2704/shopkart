import amazon from './img/amazon.svg';
import flipkart from './img/flipkart.svg';
import wallmart from './img/wallmart.svg';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div id="sponsors">
                <h3>Our Sponsors: </h3>
                <span id="links">
                    <a href="https://www.amazon.com/" target="_blank" rel="noreferrer">
                        <img 
                            src={amazon} 
                            alt="amazon logo" 
                            width={"300px"} 
                            height={"150px"}
                        />
                    </a>
                    <a href="https://www.flipkart.com/" target="_blank" rel="noreferrer">
                        <img 
                            src={flipkart} 
                            alt="flipkart logo" 
                            width={"300px"} 
                            height={"150px"}
                        />
                    </a>
                    <a href="https://www.walmart.com/" target="_blank" rel="noreferrer">
                        <img 
                            src={wallmart} 
                            alt="wallmart logo" 
                            width={"300px"} 
                            height={"150px"}
                        />
                    </a>
                </span>
            </div>
        </footer>
    );
}