import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";


import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {getItem} from "../../http/animal_shop/itemApi";
import {getBrandById} from "../../http/animal_shop/brandApi";
import {Context} from "../../index";

const TableOrderItem = ({purchase, index}) => {
    const {user} = useContext(Context);
    const history = useNavigate()
    const [sale, setSale] = useState(0);
    const [item, setItem] = useState({});
    //const [amount, setAmount] = useState(purchase.amount); // состояние для хранения количества покупок

    useEffect(()=>{
        getItem(purchase.itemId)
            .then((itemData) => {
                //console.log({purchase});
                console.log(itemData);
                setItem(itemData);
                console.log(item);
                const brandTypeId = itemData.brandId;
                // Call getBrandById to get brand data
                return getBrandById(brandTypeId);
            })
            .then((brandData) => {
                // Retrieve sale from brandData
                const sale = brandData.sale;
                setSale(sale);
                //console.log(sale);
            })
            .catch((error) => {
                // Handle any errors that may occur during the promise execution
                console.error(error);
            })
    }, []);
    //console.log({sale});
    console.log(item)

    return (
            <tr key={purchase.itemId}>
                <input
                    type="hidden"
                    name="purchaseIds[]"
                    value={purchase.itemId}
                />
                <td>
                    {purchase.itemId}
                    <ToastContainer/>
                </td>
                <td>
                    {item.itemName}
                </td>
                <td>{item.cost * purchase.amount} р.</td>
                <td>
                    <div>
                        <span>
                            {(item.cost * 0.01 * (100 - sale) * purchase.amount).toFixed(2)}
                        </span>
                    </div>
                </td>
                <td>
                    {item.description}
                </td>
                <td>
                    {purchase.amount}
                </td>
                <td>
                    <Card.Img
                        src={item.imagePath}
                        alt="product-img"
                        style={{ maxHeight: '200px' }}
                        className="card-img-top"
                    />
                </td>


                {/*<td>*/}
                {/*    {(purchase.price * purchase.amount).toFixed(2)}{" "}р.*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <div>*/}
                {/*        <span>*/}
                {/*            {(purchase.price * 0.01 * (100 - sale) * purchase.amount).toFixed(2)}*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</td>*/}

            </tr>
    );
};

export default TableOrderItem;