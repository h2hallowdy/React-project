import React, { Component } from 'react';

import {
    Container, Row, Col, Card, CardImg, CardText,
    CardBody, CardTitle, Button
} from 'reactstrap';
class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }
    render() {
        const { products } = this.state;
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