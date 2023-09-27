import { useEffect } from 'react';
import './Pagination.css';

export default function Pagination({ products }) {
    useEffect(() => {
        console.log("Pagination Products: ", products);
    }, [products])
    return (
        <div id="pagination">
            <button className="btn btn-primary">
                <div className="btn-svg">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#ffffff" 
                        width="40px" 
                        height="40px" 
                        viewBox="0 0 24 24" 
                        enableBackground="new 0 0 24 24">
                            <path d="M16.7,15.3L13.4,12l3.3-3.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4,4c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l4,4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C17.1,16.3,17.1,15.7,16.7,15.3z M8,7C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1s1-0.4,1-1V8C9,7.4,8.6,7,8,7z"/>
                    </svg>
                </div>
                <span className="btn-txt">previous</span>
            </button>
            <p className="pagination_info">
                Page: 1 of {products && products.length > 0? Number.parseInt(products.length/10): 1}
            </p>
            <button className="btn btn-primary">
                <span className="btn-txt">next</span>
                <div className="btn-svg">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#ffffff" 
                        width="40px" 
                        height="40px" 
                        viewBox="0 0 24 24" 
                        enableBackground="new 0 0 24 24" 
                        transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <path d="M16.7,15.3L13.4,12l3.3-3.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4,4c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l4,4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C17.1,16.3,17.1,15.7,16.7,15.3z M8,7C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1s1-0.4,1-1V8C9,7.4,8.6,7,8,7z"/>
                        </g>

                    </svg>
                </div>
            </button>
        </div>
    );
}