import React from 'react';
import MovieShowcase from './MovieShowcase';
import './../styles/dumb-components.css';

export default function DumbComponents() {
    return (
        <div className="container">
            <h2>Dumb Components: Movie Showcase</h2>
            <MovieShowcase />
        </div>
    );
};
