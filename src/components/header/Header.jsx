import './Header.css';
import website_logo from './website_logo.svg';

export default function Header({ websiteName }) {
    return (
        <header id="shopkart_main_header">
            <h1>
                <span className="website_logo">
                    <img src={website_logo} alt="Website logo" width="25px" height="25px" />
                </span>
                <span className='website_name'>{websiteName}</span>
            </h1>
        </header>
    );
}