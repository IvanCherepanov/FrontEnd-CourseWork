import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Table} from "react-bootstrap";
import {Context} from "../index";
import {getPurchase} from "../http/animal_shop/shopingBasketApi";
import {getItem} from "../http/animal_shop/itemApi";

const Basket =  () => {
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [item, setItem] = useState(null);
    const [purchaseData, setPurchaseData] = useState([]);
    const {user} = useContext(Context);
    console.log(user.user.id-8)
    useEffect(() => {
        getPurchase(user.user.id-8).then(data => {
            setPurchaseData(data)
        })
    }, []);
    // const purchaseData =  getPurchase(user.user.id-8);
    // console.log(purchaseData);


    const handleAmountChange = (purchaseId, amount) => {
// Обработчик изменения количества товара в корзине
// Реализация логики изменения количества товара
    };

    const handlePurchaseDelete = (purchaseId) => {
// Обработчик удаления товара из корзины
// Реализация логики удаления товара из корзины
    };

    const handleOrderSubmit = () => {
        console.log("Address:", address);
        console.log("Telephone:", telephone);
// Обработчик оформления заказа
// Реализация логики оформления заказа
    };

    return (
        <div>
            <Container className="mt-5">
                <h2 className="invisible">_</h2>
                <div>
                    {/* Используем метод map для итерации по массиву и выводим информацию о каждом объекте */}
                    {purchaseData.map((item) => (
                        <div key={item.itemId}>
                            <p>itemId: {item.itemId}</p>
                            <p>itemName: {item.itemName}</p>
                            <p>amount: {item.amount}</p>
                            <p>price: {item.price}</p>
                            <p>totalPrice: {item.totalPrice}</p>
                        </div>
                    ))}
                </div>
                <h3>Здравствуйте, {user.user.email}</h3>
                {purchaseData.length === 0 ? (
                    <h3>Корзина пуста</h3>
                ) : (
                    <h3>Корзина</h3>
                )}
                {purchaseData.length > 0 && (
                    <Form method="POST" action="/changePurchases">
                        <input
                            id="purchaseIdForDelete"
                            type="hidden"
                            name="purchaseId"
                        />
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Название</th>
                                <th>Цена за ед.</th>
                                <th>Цена по скидке</th>
                                <th>Сумма</th>
                                <th>Сумма по скидке</th>
                                <th>Количество</th>
                                <th>Изменить количество</th>
                                <th>Удалить</th>
                            </tr>
                            </thead>
                            <tbody>
                            {purchaseData.map((purchase, index) => (
                                <tr key={purchase.id}>
                                    <input
                                        type="hidden"
                                        name="purchaseIds[]"
                                        value={purchase.id}
                                    />
                                    <td>{index + 1}</td>
{/*                                    <td style={{width: "1000px"}}>*/}
{/*                                        {purchase.item.itemName}*/}
{/*                                    </td>*/}
{/*                                    <td>{purchase.item.cost} р.</td>*/}
{/*                                    <td>*/}
{/*                                        <div>*/}
{/*<span>*/}
{/*{(*/}
{/*    purchase.item.cost **/}
{/*    0.01 **/}
{/*    (100 - purchase.item.brand.sale)*/}
{/*).toFixed(2)}*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </td>*/}
{/*                                    <td>*/}
{/*                                        {(*/}
{/*                                            purchase.item.cost **/}
{/*                                            purchase.amount*/}
{/*                                        ).toFixed(2)}{" "}*/}
{/*                                        р.*/}
{/*                                    </td>*/}
{/*                                    <td>*/}
{/*                                        <div>*/}
{/*                                            <span>*/}
{/*                                            {(*/}
{/*                                                purchase.item.cost **/}
{/*                                                0.01 **/}
{/*                                                (100 - purchase.item.brand.sale) **/}
{/*                                                purchase.amount*/}
{/*                                            ).toFixed(2)}*/}
{/*                                            </span>*/}
{/*                                        </div>*/}
{/*                                    </td>*/}
{/*                                    <td>*/}
{/*                                        <Form*/}
{/*                                            method="POST"*/}
{/*                                            action="/shopping_basket/changeAmountPurchases"*/}
{/*                                            style={{display: "flex", marginTop: "20px"}}*/}
{/*                                        >*/}
{/*                                            <input*/}
{/*                                                type="hidden"*/}
{/*                                                name="purchaseId"*/}
{/*                                                value={purchase.id}*/}
{/*                                            />*/}
{/*                                            <div>*/}
{/*                                                <Form.Control*/}
{/*                                                    name="amount"*/}
{/*                                                    className="count"*/}
{/*                                                    type="number"*/}
{/*                                                    size="sm"*/}
{/*                                                    min={1}*/}
{/*                                                    max={10}*/}
{/*                                                    defaultValue={purchase.amount}*/}
{/*                                                    onChange={(e) =>*/}
{/*                                                        handleAmountChange(purchase.id, e.target.value)*/}
{/*                                                    }*/}
{/*                                                />*/}
{/*                                            </div>*/}
{/*                                            <div>*/}
{/*                                                <Button*/}
{/*                                                    variant="success"*/}
{/*                                                    type="submit"*/}
{/*                                                    className="ml-2"*/}
{/*                                                >*/}
{/*                                                    Изменить*/}
{/*                                                </Button>*/}
{/*                                            </div>*/}
{/*                                        </Form>*/}
{/*                                    </td>*/}
{/*                                    <td>*/}
{/*                                        <Button*/}
{/*                                            variant="danger"*/}
{/*                                            className="ml-2"*/}
{/*                                            onClick={() => handlePurchaseDelete(purchase.id)}*/}
{/*                                        >*/}
{/*                                            Удалить*/}
{/*                                        </Button>*/}
{/*                                    </td>*/}
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        {/*<div className="mt-3">*/}
                        {/*    <h4>Общая стоимость: {totalPrice} р.</h4>*/}
                        {/*</div>*/}
                        <div className="mt-3">
                            <h4>Адрес доставки</h4>
                            <Form.Group>
                                <Form.Label>Адрес</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    required
                                    value={address} // Bind the value to the state variable
                                    onChange={(e) => setAddress(e.target.value)} // Update the state on change
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="telephone"
                                    required
                                    value={telephone} // Bind the value to the state variable
                                    onChange={(e) => setTelephone(e.target.value)} // Update the state on change

                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={() => handleOrderSubmit()}
                            >
                                Оформить заказ
                            </Button>
                        </div>
                    </Form>
                )}
            </Container>
        </div>
    );
};

export default Basket;