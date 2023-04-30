import React, {useContext, useEffect, useState} from 'react';

import {observer} from "mobx-react-lite";

import {Button} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import UpdateBrand from "../components/modals/UpdateBrand";
import {fetchItems} from "../http/animal_shop/itemApi";
import {deleteOrder, fetchOrders, getOrderById} from "../http/animal_shop/orderApi";
import {toast, ToastContainer} from "react-toastify";
import Create from "../components/modals/Order/Create";
import Update from "../components/modals/Order/Update";
import {DEVICE_PATH, ORDER_DETAIL_PATH} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";


const MyOrder = observer(() => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [orderVisible, setOrderVisible] = useState(false);
    const [orderNewVisible, setOrderNewVisible] = useState(false);
    const [orderDetailVisible, setOrderDetailVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [myOrder, setMyOrder]= useState([])
    console.log(product.brands.map(brand => brand.name))
    const history = useNavigate()
    console.log(user.user, user.user.id)

    useEffect(()=>{
        getOrderById(user.user.id).then(data => setMyOrder(data))
    }, []) // todo device.brands
    console.log(myOrder)

    const deleteOrderById = async (event, id) => {
        try {
            event.preventDefault();
            await deleteOrder(id); // make DELETE request to API endpoint
            toast.success("Delete successful")
        } catch (e) {
            toast.error("try again")
            console.error(e);
        }
    }

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
                <h1>Список Заказов</h1>
            </div>
            <ToastContainer/>
            <div className="row">
            </div>
            <table className="table table-striped table-bordered mt-3">
                <thead className="table-dark">
                <tr>
                    {/*<th>Id</th>*/}
                    {/*<th>Заказчик</th>*/}
                    <th>Время заказа</th>
                    <th>Цена заказа</th>
                    <th>Действия</th>
                    {/*<th>Величина скидки</th>*/}

                </tr>
                </thead>
                <tbody>
                {myOrder.map((order) => (

                    <tr key={order.id}>

                        {/*<td>{order.id}</td>*/}
                        {/*<td>{order.userId}</td>*/}
                        <td>{order.orderTime}</td>
                        <td>{order.costOrder}</td>
                        {/*<td>{brand.sale}</td>*/}
                        <td>
                            <div  className="d-flex align-items-center">

                                <Button
                                    className="ml-2"
                                    onClick={() => history(ORDER_DETAIL_PATH + '/' + order.id)}
                                >
                                    Детали
                                </Button>

                            </div>


                        </td>
                    </tr>

                ))}
                </tbody>
            </table>

        </div>

    );
});

export default MyOrder;