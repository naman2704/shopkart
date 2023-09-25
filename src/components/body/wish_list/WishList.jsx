export default function WishList({ products, bookmarkList }) {
    return (
        <div id="wish_list_container popup_container">
            <button 
                className="btn btn-warning show_wish_list_item popup_btn" 
                data-target="widh_list"
                onClick={(e) => {
                    const popup = e.target.closest('.popup_container')/* .querySelector('.popup') */;
                    console.log("Popup: ", popup);
                    /* if (popup.classList.contains('dnone')) popup.classList.remove('dnone');
                    else popup.classList.add('dnone'); */
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
                        return <li key={bookmarkedProduct.id}>{bookmarkedProduct.id}</li>
                    })
                }
            </ul>
        </div>
    );
}