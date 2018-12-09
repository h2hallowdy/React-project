import React, { Component } from 'react';

import {
    Container, Row, Col, Card, CardImg, CardText,
    CardBody, CardTitle, Button
} from 'reactstrap';
class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [{
                "id": "69dbd263-47d3-4e6e-a07b-baea0560710d",
                "name": "Split Peas - Green, Dry",
                "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "412484ff-5b6f-4ef1-9efc-ed52e7e94218",
                "name": "Apple - Delicious, Red",
                "description": "blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "f13cc21b-6e82-4f0b-8e6e-ecb15ad919e5",
                "name": "Table Cloth - 53x69 Colour",
                "description": "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "ca64b8b5-ee3f-4306-9b54-981bbab896da",
                "name": "Muffin - Mix - Bran And Maple 15l",
                "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "056c0cdf-ffd0-4130-bed1-47e3ad5c8af7",
                "name": "Coffee - Colombian, Portioned",
                "description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "fb199d60-d806-424d-a60b-03f66a9c1857",
                "name": "Tuna - Loin",
                "description": "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "121bcbd6-eafc-4983-a0d7-643d9d7ea96e",
                "name": "Appetizer - Shrimp Puff",
                "description": "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "d5175e45-1900-4863-b13b-9371c6cc8479",
                "name": "Beer - Paulaner Hefeweisse",
                "description": "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "5a443094-405d-4933-908a-771f168ab2f9",
                "name": "Eggplant Oriental",
                "description": "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "3b538939-8081-48f1-8ae2-efded7759ac5",
                "name": "Nantucket Apple Juice",
                "description": "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "2b184370-9393-434b-a791-ffac39a36870",
                "name": "Pomegranates",
                "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "1fe42936-6dc6-454a-a1be-ba1f0c330f2d",
                "name": "Berry Brulee",
                "description": "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "696059fd-ecc2-4159-840f-fac9d69a9382",
                "name": "Island Oasis - Pina Colada",
                "description": "non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "a316f768-0440-4840-8267-d1cda4845635",
                "name": "Tumeric",
                "description": "ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "61596710-8205-448f-81fc-71b0c511e829",
                "name": "Beer - Original Organic Lager",
                "description": "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "c9d85ad2-890b-4e08-aca7-5601d4a03db5",
                "name": "Pie Pecan",
                "description": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "62713a3e-e31d-4cae-956a-3fc367bcee3c",
                "name": "Lamb - Whole, Fresh",
                "description": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "dbd3b806-b22e-498a-a54f-02483f6600a8",
                "name": "Cocoa Butter",
                "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "9ae38746-b316-4523-b120-c3ce0410909d",
                "name": "The Pop Shoppe - Grape",
                "description": "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "981e7cf4-0857-4a63-b828-eac7ed077f34",
                "name": "Wine - Pinot Noir Stoneleigh",
                "description": "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }]
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