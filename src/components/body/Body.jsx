import { PRODUCT_DATA } from './DummyData';

import Header from '../body/header/Header';
import FilterProductsForm from "./filter_products_form/FilterProductsForm";
import ProductList from '../body/product_list/ProductList';

import { useEffect, useState/* , useEffect */ } from "react";
import WishList from '../body/wish_list/WishList';
import Cart from '../body/cart/Cart';

import axios from 'axios';

/* import bg1 from '../body/img/formBG1.avif';
import bg2 from '../body/img/formBG2.avif';
import bg3 from '../body/img/formBG3.avif';
import bg4 from '../body/img/formBG4.avif';
const images = [bg1, bg2, bg3, bg4]; */

export default function Body() {
    let SHOPKART_PRODUCTS = [];
    const [products, setProducts] = useState([]);
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarkedProducts')) || [];
    const cartData = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const [bookmarkList, setBookmarkList] = useState(bookmarkData);
    const [cartList, setCartList] = useState(cartData);
    const [category, setCategory] = useState('all');
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                // handle success
                return response.data;
            })
            .then((data) => {
                return data?.products;
            })
            .then ((products) => {
                SHOPKART_PRODUCTS = products;
                setProducts(SHOPKART_PRODUCTS);
                const categoryList = [];
                Object.values(SHOPKART_PRODUCTS).forEach(product => {
                    const category = product.category.toLowerCase().trim();
                    if (!categoryList.includes(category))
                        categoryList.push(category);
                });
                setCategoryList(categoryList);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                /* productsData = PRODUCT_DATA.products;
                SHOPKART_PRODUCTS = productsData;
                setProducts(productsData);
                Object.values(SHOPKART_PRODUCTS).forEach(product => {
                    const category = product.category.toLowerCase().trim();
                    if (!categoryList.includes(category))
                        categoryList.push(category);
                }); */
            })
    }, []);
    
    const productCategoryClickHandler = (event) => {
        const target_category = event.target?.dataset?.category.trim();
        if (target_category && typeof target_category === 'string' && target_category !== "") {
            document.querySelector(".category_filter_list li[active='true']")?.setAttribute('active', 'false');
            setCategory(target_category);
            event.target.setAttribute('active', 'true');
            let shopKartProducts = [...SHOPKART_PRODUCTS];
            console.log("All Products: ", shopKartProducts)
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
    const bookmarkClickHandler = (event) => {
        const bookmarkList1 = [...bookmarkList];
        const productId = event.target.closest('.card').getAttribute('product_id');
        if (productId && typeof productId === "string") {
            if (bookmarkList1.includes(productId)) {
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
    const addToCartClickHandler = (event) => {
        const cartList1 = [...cartList];
        const productId = event.target.closest('.card').getAttribute('product_id');
        if (productId && typeof productId === "string") {
            if (!cartList1.includes(productId)) {
                cartList1.push(productId);
                event.target.closest('.card').setAttribute('insideCart', 'true');
                event.target.textContent = "View In Cart";
                localStorage.setItem('cartProducts', JSON.stringify(cartList1));
                setCartList(cartList1);
            } else {
                document.getElementById('cart')?.classList.remove('dnone')
            }
        } 
    }
    const removeProductFromWishList = (e) => {
        const productId = e.target.closest('.card')?.getAttribute('product_id').trim();
        if (productId) {
            const bookmarkList1 = [...bookmarkList];   
            if (bookmarkList1.length > 0 && bookmarkList1.includes(productId)) {
                bookmarkList1.splice(bookmarkList1.indexOf(productId), 1);
                setBookmarkList(bookmarkList1);
                localStorage.setItem('bookmarkedProducts', JSON.stringify(bookmarkList1));  
            }
        }                                              
    }
    const removeProductFromCartList = (e) => {
        const productId = e.target.closest('.card')?.getAttribute('product_id').trim();
        if (productId) {
            const cartList1 = [...cartList];   
            if (cartList1.length > 0 && cartList1.includes(productId)) {
                cartList1.splice(cartList1.indexOf(productId), 1);
                setCartList(cartList1);
                localStorage.setItem('cartProducts', JSON.stringify(cartList1));  
            }
        }                                              
    }
    /* const [index, setIndex] = useState(1);
    useEffect(() => {
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
                    products={SHOPKART_PRODUCTS}
                    bookmarkList={bookmarkList} 
                    removeProductClickHandler={removeProductFromWishList}
                />
                <Cart 
                    products={SHOPKART_PRODUCTS}
                    cartList = {cartList}
                    removeProductClickHandler={removeProductFromCartList}
                />
            </div>
            <FilterProductsForm />
            <ProductList 
                products={products} 
                bookmarkList={bookmarkList} 
                categoryList={categoryList}
                cartList = {cartList}
                bookmarkClickHandler={bookmarkClickHandler}
                addToCartClickHandler={addToCartClickHandler}
                categoryClickHandler={productCategoryClickHandler}
            />
        </div>
    );
}