import {useContext, useEffect, useState} from "react";

import {fetchOrders} from "../../http/animal_shop/orderApi";

import TableOrderDetailItem from "./TableOrderDetailItem";
import {useNavigate, useParams} from "react-router-dom";
import {Context} from "../../index";
import {getOrderDetailListById} from "../../http/animal_shop/orderDetailApi";
import {fetchItems, fetchItemTypes, fetchPets} from "../../http/animal_shop/itemApi";
import {fetchBrands} from "../../http/animal_shop/brandApi";

const OrderDetail = () => {
    const {product} = useContext(Context)
    const [orderVisible, setOrderVisible] = useState(false);
    const [orderNewVisible, setOrderNewVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [orderDetails, setOrderDetails] = useState([])
    const history = useNavigate()
    const {id} = useParams()
    console.log("orderId: ", id)
    console.log(product.brands.map(brand => brand.name))

    useEffect(()=>{
        getOrderDetailListById(id)
            .then(data =>
                setOrderDetails(data.orderItems)
            )
    }, [])
    console.log(orderDetails)

    useEffect(()=>{
        fetchItemTypes().then(data => product.setTypes(data))
        fetchPets().then(data => product.setPets(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchItems(null, null, null,0).then(data =>
            product.setItems(data)
        )
    },[])

    return (

        <div className="container">
            <h1>Список товаров в заказе</h1>
            {/*<div className="row">*/}
            {/*    <div className="col-lg-3">*/}
            {/*        <a href="/item/new" className="btn btn-primary btn-sm mb-3">Добавить</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <table className="table table-striped table-bordered mt-3">
                <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Цена по скидке</th>
                    <th>Описание</th>
                    <th>Количество</th>
                    <th>Изображение</th>
                </tr>
                </thead>
                <tbody>
                {orderDetails.map((itemOrder) => (
                    <TableOrderDetailItem key={itemOrder.id} purchase={itemOrder}/>
                    // <td>{itemOrder.amount}</td>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default OrderDetail;