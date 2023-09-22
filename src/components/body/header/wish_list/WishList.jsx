import { useEffect } from "react";

export default function WishList({ products, bookmarkList }) {
    useEffect(() => {
        console.log("Wish List: ", bookmarkList);
    }, [bookmarkList])
    return (
        <div id="wish_list_container">
            <button className="btn btn-warning show_wish_list_item" data-target="widh_list">Wish List</button>
            <ul id="widh_list">
                {
                    products.filter((product) => {
                        console.log(bookmarkList.includes(product.id.toString()));
                        return bookmarkList.includes(product.id.toString());
                    }).map((bookmarkedProduct) => {
                        return <li key={bookmarkedProduct.id}>{bookmarkedProduct.id}</li>
                    })
                }
            </ul>
        </div>
    );
}