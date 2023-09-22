import { PRODUCT_DATA } from './DummyData';

import Header from '../body/header/Header';
import FilterProductsForm from "./filter_products_form/FilterProductsForm";
import ProductList from '../body/product_list/ProductList';

import { useState, useEffect } from "react";
import WishList from './header/wish_list/WishList';

/* import bg1 from '../body/img/formBG1.avif';
import bg2 from '../body/img/formBG2.avif';
import bg3 from '../body/img/formBG3.avif';
import bg4 from '../body/img/formBG4.avif';
const images = [bg1, bg2, bg3, bg4]; */

export default function Body() {
    const [bookmarkList, setBookmarkList] = 
        useState(
            typeof localStorage.getItem('bookmarkedProducts') === 'undefined' || 
                localStorage.getItem('bookmarkedProducts') === null ? 
                []: JSON.parse(localStorage.getItem('bookmarkedProducts'))
        );
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
            setBookmarkList(bookmarkList)
        } 
    }
    useEffect(() => {
        console.log("Bookmarklist: ", bookmarkList)
    }, [bookmarkList])
    /* const [index, setIndex] = useState(1);
    useEffect(() => {
        console.log('PRODUCT_DATA: ', PRODUCT_DATA);
        const updateImageInterval = setInterval(() => {
            const element = document.querySelector('div#body');
            element.style.backgroundImage = `url('${images[index]}')`;
            if (index === 3) setIndex(0);
            else setIndex(index + 1);
        }, 2000);
        return () => clearInterval(updateImageInterval);
    }, [index]); */
    return (
        <div id="body">
            <Header 
                websiteName="shopkart"
            />
            <WishList 
                products={PRODUCT_DATA.products}
                bookmarkList={bookmarkList} 
            />
            <FilterProductsForm />
            <ProductList 
                products={PRODUCT_DATA.products} 
                bookmarkList={bookmarkList} 
                bookmarkClickHandler={bookmarkClickHandler}
            />
        </div>
    );
}