import FilterProductsForm from "./filter_products_form/FilterProductsForm";
import Header from '../body/header/Header';
import { useState, useEffect } from "react";
import bg1 from '../body/img/formBG1.avif';
import bg2 from '../body/img/formBG2.avif';
import bg3 from '../body/img/formBG3.avif';
import bg4 from '../body/img/formBG4.avif';
const images = [bg1, bg2, bg3, bg4];

export default function Body() {
    const [index, setIndex] = useState(1);
    useEffect(() => {
        const updateImageInterval = setInterval(() => {
            const element = document.querySelector('div#body');
            element.style.backgroundImage = `url('${images[index]}')`;
            if (index === 3) setIndex(0);
            else setIndex(index + 1);
        }, 2000);
        return () => clearInterval(updateImageInterval);
    }, [index]);
    return (
        <div id="body">
            <Header websiteName="shopkart"/>
            <FilterProductsForm />
        </div>
    );
}