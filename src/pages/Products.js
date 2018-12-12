import React, { Component } from 'react';
import axios from 'axios';

import {
    Container, Row, Col, Card, CardImg, CardText,
    CardBody, CardTitle, Button
} from 'reactstrap';

import Loading from '../components/Loading';
class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get('https://v3lw45jx13.sse.codesandbox.io/products').then(res => {
            this.setState({
                products: res.data,
                loading: false
            });
        });
    }

    render() {
        const { products, loading } = this.state;
        if(loading) {
            return(
                <Loading></Loading>
            );
        }
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    {products.map(product => (
                        <Col sm="4">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={product.imageUrl} />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add to cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Products;