import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StarRating.css';

class StarRating extends Component {
    render() {
        return (
            <div className="star-rating-container">
                <div className="star-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="rating-number">
                    <div className="rank-number">{this.props.number}</div>
                </div>
            </div>
        );
    }
}

StarRating.propTypes = {
    number: PropTypes.string.isRequired

}
export default StarRating;