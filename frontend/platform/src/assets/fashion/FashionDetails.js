import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './FashionDetails.css';

export default function FashionDetails() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [DataisLoaded, setDataisLoaded] = useState(false);
    const [CartItem, setCartItem] = useState(0);

    useEffect(() => {
        fetch("https://datasets-server.huggingface.co/rows?dataset=rajuptvs%2Fecommerce_products_clip&config=default&split=train&offset=0&length=100")
            .then((res) => res.json())
            .then((json) => {
                setItems(json.rows);
                setDataisLoaded(true);
            });
    }, []);

    if (!DataisLoaded) return <h1>Loading...</h1>;

    const row = items.find(r => r.row_idx === parseInt(id));

    if (!row) return <h1>Item not found</h1>;

    
    function AddItemToCart() {    
        setCartItem(CartItem + 1);
    }
    function DelItemToCart() {
        setCartItem(CartItem - 1);
    }
    return (
        <div className="details-container">
            <p>Product Name : {row.row.Product_name}</p>
            <p>Price : {row.row.Price}</p>
            <p>Colors : {row.row.colors}</p>
            <p>Pattern : {row.row.Pattern}</p>
            <p>Description : {row.row.Description}</p>
            <p>Clip Info : {row.row.Clipinfo}</p>
            <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={AddItemToCart}>
                <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                ADD ITEM
            </button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={DelItemToCart}>
                <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                DEL ITEM
            </button>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Buy Now</button>
            </div>
            {CartItem > 0 && <p>Item in cart : {CartItem}</p>} 
        </div>
    );
}
