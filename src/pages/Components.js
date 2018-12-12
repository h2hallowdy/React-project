import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

import Counter from '../components/Counter';
class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true
        };
    }
    componentDidUpdate() {
        console.log('app update');
    }

    removeCounter() {
        this.setState({
            showCounter: false
        });
    }
    render() {
        console.log('app render');
        return (
            <Container className="mt-5">
                <Button outline color="danger" onClick={() => this.removeCounter()}>
                    Remove Counter
                </Button>
                {this.state.showCounter && <Counter />}
            </Container>
        );
    }
}

export default Components;