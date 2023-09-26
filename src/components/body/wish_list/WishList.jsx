import './WishList.css';

export default function WishList({ products, bookmarkList }) {
    return (
        <div id="wish_list_container" className="popup_container">
            <button 
                className="btn btn-warning show_wish_list_item popup_btn" 
                data-target="widh_list"
                onClick={(e) => {
                    document.querySelector('#cart_container .popup').classList.add('dnone');
                    const popup = e.target.closest('.popup_container').querySelector('.popup');
                    if (popup.classList.contains('dnone')) popup.classList.remove('dnone');
                    else popup.classList.add('dnone');
                }}
            >
                <span className="btn-txt">Wish List</span>
                <div className="btn-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="red">
                            </path>
                        </g>
                    </svg>
                </div>
            </button>
            <ul id="widh_list" className="dnone popup">
                {
                  products && products.length > 0 && bookmarkList && bookmarkList.length > 0 && products.filter((product) => {
                        return bookmarkList.includes(product.id.toString());
                    }).map((bookmarkedProduct) => {
                        return (
                            <li key={bookmarkedProduct.id}>
                                <div className="card" product_id={bookmarkedProduct.id}>
                                    <div className="product_thumbnail">
                                        <img className="card-img-top" src={bookmarkedProduct.thumbnail} alt="Card cap" />
                                    </div>
                                    <div className="card-body">
                                        <div className="product-info">
                                        <h5 className="card-title">{bookmarkedProduct.title}</h5>
                                        <div className="product_rating">
                                            <span className="title">Rating: </span>
                                            <span className="rating_value">{bookmarkedProduct.rating}</span>
                                            <div className="rating_block">
                                            <div className="rating_progress"></div>
                                            </div>
                                        </div>
                                        <div className="product_price_section">
                                            <div className="product_price">
                                            <span className="currency">
                                                <img src="/static/media/ruppee.e9ea7d608dd236a7bf9cdaddcd305ae7.svg" alt="ruppee currency symbol" />
                                            </span>
                                            <span className="price">{bookmarkedProduct.price}</span>
                                            </div>
                                            <div className="orignal_price">
                                            <span className="price">{bookmarkedProduct.price}</span>
                                            </div>
                                        </div>
                                        <div className="product_stock">
                                            <span className="title"> In stock: </span>
                                            <span className="value stock_value">{bookmarkedProduct.stock}</span>
                                        </div>
                                        </div>
                                        <div className="action_buttons">
                                        <button type="button" className="btn btn-danger remove_btn">Remove</button>
                                        <button type="button" className="btn btn-primary buy_now">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}