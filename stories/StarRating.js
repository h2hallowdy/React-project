import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import StarRating from '../src/components/StarRating';

storiesOf('StarRating', module)
  .add(
    'Default',
    () => (
      <StarRating
        number="4.5"
      />
    )
  );