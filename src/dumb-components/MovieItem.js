import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react'

export default function MovieItem(props) {
    const { id, name, imgSrc, rating, onRemove } = props;

    return (
        <div className="movie-item ps-3 py-2">
            <FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={() => onRemove(id)}/>
            <img src={imgSrc} alt='' />
            <span className="movie-name">{name}</span>
            <span className="movie-rating">Rating: {rating} out of 5</span>
        </div>
    );
}

MovieItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func
};
