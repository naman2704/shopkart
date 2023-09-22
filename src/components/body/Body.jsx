import { PRODUCT_DATA } from './DummyData';

import Header from '../body/header/Header';
import FilterProductsForm from "./filter_products_form/FilterProductsForm";
import ProductList from '../body/product_list/ProductList';

import { useState/* , useEffect */ } from "react";
import WishList from '../body/wish_list/WishList';
import Cart from '../body/cart/Cart';

/* import bg1 from '../body/img/formBG1.avif';
import bg2 from '../body/img/formBG2.avif';
import bg3 from '../body/img/formBG3.avif';
import bg4 from '../body/img/formBG4.avif';
const images = [bg1, bg2, bg3, bg4]; */

export default function Body() {
    const data = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];
    const SHOPKART_PRODUCTS = PRODUCT_DATA.products;
    const [products, setProducts] = useState(SHOPKART_PRODUCTS);
    const [bookmarkList, setBookmarkList] = useState(data);
    const categoryList = [];
    Object.values(SHOPKART_PRODUCTS).forEach(product => {
        const category = product.category.toLowerCase().trim();
        if (!categoryList.includes(category))
            categoryList.push(category);
    });
    const [category, setCategory] = useState('all');
    const bookmarkClickHandler = (event) => {
        const bookmarkList1 = [...bookmarkList];
        const productId = event.target.closest('.card').getAttribute('product_id');
        if (productId && typeof productId === "string") {
            console.log("Type of bookmarkList: ", typeof bookmarkList1);
            if (bookmarkList1.includes(productId)) {
                console.log(typeof bookmarkList1);
                bookmarkList1.splice(bookmarkList1.indexOf(productId), 1);
                event.target.closest('.card').setAttribute('bookmarked', 'false');
            } else {
                bookmarkList1.push(productId);
                event.target.closest('.card').setAttribute('bookmarked', 'true');
            }
            setBookmarkList(bookmarkList1);
            localStorage.setItem('bookmarkedProducts', JSON.stringify(bookmarkList1));
        } 
    }
    const productCategoryClickHandler = (event) => {
        const target_category = event.target?.dataset?.category.trim();
        console.log(target_category);
        if (target_category && typeof target_category === 'string' && target_category !== "") {
            document.querySelector(".category_filter_list li[active='true']")?.setAttribute('active', 'false');
            setCategory(target_category);
            event.target.setAttribute('active', 'true');
            let shopKartProducts = [...SHOPKART_PRODUCTS];
            if (target_category === 'all') {
                setProducts(shopKartProducts);
            }
            else {
                shopKartProducts = shopKartProducts.filter(product => {
                    return product.category.trim() === target_category;
                });
                setProducts(shopKartProducts);
            }
        }
    }
    /* useEffect(() => {
        console.log("Bookmarklist1234: ", bookmarkList)
    }, [bookmarkList]); */
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
            <div className="button_list" id="saved_items">
                <WishList 
                    products={products}
                    bookmarkList={bookmarkList} 
                />
                <Cart />
            </div>
            <FilterProductsForm />
            <ProductList 
                products={products} 
                bookmarkList={bookmarkList} 
                categoryList={categoryList}
                bookmarkClickHandler={bookmarkClickHandler}
                categoryClickHandler={productCategoryClickHandler}
            />
        </div>
    );
}