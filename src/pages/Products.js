import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchItems, fetchItemTypes, fetchPets, getItemByName} from "../http/animal_shop/itemApi";


import DeviceList from "../components/old/DeviceList";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import {fetchBrands} from "../http/animal_shop/brandApi";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import PetBar from "../components/PetBar";
import {toast} from "react-toastify";

const Products = observer(() => {
    const {product} = useContext(Context)
    const [sortId, setSortId] = useState(0); // 0 for ascending, 1 for descending
    const [searchValue, setSearchValue] = useState('');
    useEffect(()=>{
        fetchItemTypes().then(data => product.setTypes(data))
        fetchPets().then(data => product.setPets(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchItems(null, null, null,0).then(data =>
            product.setItems(data)
        )
    },[])
    console.log(product)
    console.log(product.types)

    useEffect(()=>{
        fetchItems(product.selectedPet.id, product.selectedItemType.id, product.selectedBrand.id,sortId).then(data => {
                product.setItems(data)
            }
        )
    }, [product.selectedPet, product.selectedItemType, product.selectedBrand, sortId])

    const handleSortChange = (sortId) => {
        setSortId(sortId);
    }

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchValue !== '') {
            try {
                getItemByName(searchValue)
                    .then(response => {
                        // if (response === "Purchases sent successfully.") {
                        //     toast.success("Поиск успешен");
                        //     product.setItems()
                        //     console.log("Successful")
                        // } else {
                        //     console.log("No Successful")
                        //     toast.error("Произошла ошибка");
                        // }
                        product.setItems(response);
                    })
                    .catch(error => {
                        console.log(error);
                        toast.error("Произошла ошибка");
                    });

            } catch (error) {
                console.error('Error searching for item:', error);
            }
        }
    }
    // console.log(product)
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <BrandBar/>
                    <PetBar/>
                    <div className="d-flex justify-content-end mb-2">
                        <select
                            className="form-select"
                            value={sortId}
                            onChange={(e) => handleSortChange(parseInt(e.target.value))}
                        >
                            <option value={0}>Sort by Ascending</option>
                            <option value={1}>Sort by Descending</option>
                        </select>
                    </div>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                </Col>
                <Col md={9}>
                    <TypeBar/>
                    <ProductList/>
                    {/*<Pages/>*/}
                </Col>
            </Row>
        </Container>
    );
});

export default Products;