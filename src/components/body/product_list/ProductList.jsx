import './ProductList.css';
import {  useEffect } from "react";
import ruppeeSvg from '../img/ruppee.svg';

export default function ProductList({ products }) {
    const categoryList = [];
    Object.values(products).forEach(product => {
        const category = product.category.toLowerCase().trim();
        if (!categoryList.includes(category))
            categoryList.push(category);
    });
    let bookmarkList = 
        typeof localStorage.getItem('bookmarkedProducts') === 'undefined' || 
        localStorage.getItem('bookmarkedProducts') === null ? []: JSON.parse(localStorage.getItem('bookmarkedProducts'));
    console.log("bookmarkList: ", bookmarkList);
    useEffect(() => {
        // console.log('products2704: ', categoryList);
        // console.log(products)
        console.log(bookmarkList)
    }, [bookmarkList]);
    const bookmarkClickHandler = (event) => {
        const productId = event.target.closest('.card').getAttribute('product_id');
        if (productId && typeof productId === "string") {
            console.log("Type of bookmarkList: ", typeof bookmarkList);
            if (bookmarkList.includes(productId)) {
                console.log(typeof bookmarkList);
                bookmarkList.splice(bookmarkList.indexOf(productId), 1);
                event.target.closest('.card').setAttribute('bookmarked', 'false');
            } else {
                bookmarkList.push(productId);
                event.target.closest('.card').setAttribute('bookmarked', 'true');
            }
            console.log("bookmarkList: ", bookmarkList);
            localStorage.setItem('bookmarkedProducts', JSON.stringify(bookmarkList));
        } 
    }
    return (
        <div id="product_list">
            <div id="category_filter">
                <ul className="category_filter_list">
                    <li className="btn btn-secondary" active="true">All</li>
                    {categoryList.map(category => {
                        return <li className="btn btn-light" data-category={category}>{category}</li>
                    })}
                </ul>
            </div>
            <div className="products">
                {
                    products.map(product => {
                        const ratingPercentage = ((product.rating/5) * 100).toFixed(2);
                        const orignalPrice = Number.parseInt((product.price * 100)/(100 - product.discountPercentage));
                        const bookmarked = bookmarkList.includes(product.id.toString())? "true": "false";
                        console.log("Bookmarked: ", bookmarked);
                        return (
                            <div className="card" product_id={product.id} bookmarked={bookmarked}>
                            <div className="product_thumbnail">
                                <img className="card-img-top" src={product.thumbnail} alt="Card cap" />
                            </div>
                            <div className="card-body">
                                <button className="btn bookmark_btn" onClick={bookmarkClickHandler}>
                                    <div className="btn_svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                            <g id="SVGRepo_iconCarrier"> 
                                                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="none"/> 
                                            </g>
                                        </svg>
                                    </div>
                                </button>
                                <h5 className="card-title">
                                    {
                                        typeof product.title !== "undefined"? 
                                            product.title: "Lorem Ipsum"
                                    }
                                </h5>
                                <p className="card-text">
                                    {
                                        typeof product.description !== "undefined" ? 
                                        product.description: 
                                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                         when an unknown printer took a galley of type and scrambled it to make 
                                         a type specimen book.`
                                    }
                                </p>
                                <div className="product_rating">
                                    <span className="title">Rating: </span> 
                                    <span className="rating_value">{typeof product.rating !== "undefined"? product.rating: "Rating not available."}</span>
                                    <div className="rating_block">
                                        <div className="rating_progress" style={{
                                            width: `${ratingPercentage}%`
                                        }}></div>
                                    </div>
                                </div>
                                <div className="trigger_action">
                                    <div className="product_price_section">
                                        <div className="product_price">
                                        <span className="currency">
                                            <img src={ruppeeSvg} alt="ruppee currency symbol"/>
                                        </span>
                                        <span className="price">{product.price}</span>
                                        </div>
                                        <div className="orignal_price">
                                        <span className="price">{orignalPrice}</span>        
                                        </div>
                                    </div>
                                    <a href="/" className="btn btn-primary">Add to Cart</a>
                                </div>
                                <div className="product_stock">
                                    <span className="title"> In stock: </span>
                                    <span className="value stock_value">{typeof product.stock !== "undefined"? product.stock: "Product not available."}</span>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}