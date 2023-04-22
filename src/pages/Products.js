import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchItems, fetchItemTypes, fetchPets} from "../http/animal_shop/itemApi";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/old/BrandBar";
import DeviceList from "../components/old/DeviceList";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";

const Products = observer(() => {
    const {product} = useContext(Context)
    useEffect(()=>{
        fetchItemTypes().then(data => product.setTypes(data))
        fetchPets().then(data => product.setPets(data))
        fetchItems().then(data =>
            product.setItems(data)
        )
    },[])
    console.log(product)

    useEffect(()=>{
        fetchItems(product.selectedPet.id).then(data => {
                product.setItems(data)
            }
        )
    }, [product.selectedPet])
    // console.log(product)
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    {/*<TypeBar/>*/}
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default Products;