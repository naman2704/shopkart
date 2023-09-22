import './FilterProductsForm.css';
export default function FilterProductsForm() {
    return (
        <form id="filter_products_form">
            <div className="p-1 rounded rounded-pill shadow-sm search_form">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button id="button-addon2" type="button" className="btn btn-link text-warning">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> 
                                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#696666ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                            </svg>
                        </button>
                    </div>
                    <input id="search_bar" type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" className="form-control border-0" />
                </div>
            </div>
            <div className="other_filters clearfix">
                <div className="filter price_range_form">
                    <label htmlFor="select_price_range">Price range:</label>
                    <select className="form-select" aria-label="Default select example" id="select_price_range" defaultValue={'all'}>
                        <option value="all">{"All"}</option>
                        <option value="lessorequal500">{"0 - 500"}</option>
                        <option value="lessorequal1000">{"501 - 1000"}</option>
                        <option value="lessorequal1500">{"1001 - 1500"}</option>
                        <option value="lessorequal2000">{"1501 - 2000"}</option>
                        <option value="lessorequal2500">{"2001 - 2500"}</option>
                        <option value="lessorequal3000">{"2501 - 3000"}</option>
                    </select>
                </div>
                <div className="filter select_rating_form">
                    <label htmlFor="select_rating_form">Rating:</label>
                    <select className="form-select" aria-label="Default select example" id="select_rating_form" defaultValue={'all'}>
                        <option value="all">{"All"}</option>
                        <option value="lessorequal1">{"0 - 1"}</option>
                        <option value="lessorequal2">{"1 - 2"}</option>
                        <option value="lessorequal3">{"2 - 3"}</option>
                        <option value="lessorequal4">{"3 - 4"}</option>
                        <option value="lessorequal4.5">{"4 - 4.5"}</option>
                        <option value="above4.5">{"Above 4.5"}</option>
                    </select>
                </div>
            </div>
        </form>
    );
}