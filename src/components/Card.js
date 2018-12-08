import React from 'react';
import './Card.css';

// Functional stateless component => state cannot put in these components
// No life-cycle

function Card(props) {
    const { imageUrl, children } = props;
    return (
        <div className="card">
            {/* Create card-cover first */}
            <div
                className="card-cover"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Card;