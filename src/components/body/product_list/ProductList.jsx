
import Pagination from "../pagination/Pagination";
import './ProductList.css';
import ruppeeSvg from '../img/ruppee.svg';

export default function ProductList({ 
    products, 
    bookmarkList, 
    categoryList, 
    cartList,
    bookmarkClickHandler, 
    addToCartClickHandler, 
    categoryClickHandler 
}) {
    return (
        <div id="product_list">
            <div id="category_filter">
                <ul className="category_filter_list">
                    <li className="btn btn-light" key="all" data-category="all" active="true" onClick={categoryClickHandler}>All</li>
                    {categoryList.map(category => {
                        return <li className="btn btn-light" key={category} data-category={category} active="false" onClick={categoryClickHandler}>{category}</li>
                    })}
                </ul>
            </div>
            <Pagination 
                products={products}
            />
            <div className="products">
                {
                    products.map(product => {
                        const ratingPercentage = ((product.rating/5) * 100).toFixed(2);
                        const orignalPrice = Number.parseInt((product.price * 100)/(100 - product.discountPercentage));
                        return (
                            <div 
                                className="card" 
                                key={product.id} 
                                product_id={product.id} 
                                bookmarked={bookmarkList?.includes(product?.id?.toString())? 'true': 'false'}
                            >
                            <div className="product_thumbnail">
                                <img className="card-img-top" src={product.thumbnail} alt="Card cap" />
                            </div>
                            <div className="card-body">
                                <button className="btn bookmark_btn" onClick={bookmarkClickHandler}>
                                    <div className="btn_svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" stroke="#1a1a1aa8" strokeWidth="2">
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
                                    <button 
                                        className="btn btn-primary"
                                        onClick={addToCartClickHandler}
                                    >
                                        {cartList?.includes(product?.id?.toString())? 'View in Cart': 'Add to Cart'}
                                    </button>
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