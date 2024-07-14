import React, { useState, useEffect } from "react";
import './Fashion.module.css';
import { Routes, Route, Link} from 'react-router-dom';
import FashionDetails from "./FashionDetails";

const API = () => {
    const [items, setItems] = useState([]);
    const [DataisLoaded, setDataisLoaded] = useState(false);

    useEffect(() => {
        fetch("https://datasets-server.huggingface.co/rows?dataset=rajuptvs%2Fecommerce_products_clip&config=default&split=train&offset=0&length=100")
            .then((res) => res.json())
            .then((json) => {
                setItems(json.rows);
                setDataisLoaded(true);
            });
    }, []);

    if (!DataisLoaded) return <h1>Loading...</h1>;

    return (
        <div className='grid-container'>
            {items.map((item) => (
                <div className='grid-item' key={item.row_idx}>
                    <Link to={`/fashion/${item.row_idx}`}>
                        <img src={item.row.image.src} alt={item.row_idx} />
                    </Link>
                    <p>{item.row.Product_name}</p>
                    <p>{item.row.Price}</p>
                </div>
            ))}
        </div>
    );
}

const Fashion = () => (
    <Routes>
        <Route path="/" element={<API />} />
        <Route path=":id" element={<FashionDetails />} /> {/* Nested route */}
    </Routes>
);

export default Fashion;
