import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { withInfo } from '@storybook/addon-info';
import Card from '../src/components/Card';


storiesOf('Card', module)
    .add(
        'Simple-Version',
        () => (
            <Card imageUrl="https://picsum.photos/200/300">
                <h3>Card-title</h3>
                <p>Card content</p>
            </Card>
        )
    );