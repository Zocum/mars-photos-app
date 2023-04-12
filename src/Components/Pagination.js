import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
    const pageNumbers = [];

    for (let i=1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i);
    }

  return ( 
    <footer className='pagi'>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="pageItem">
                    <button onClick={() => paginate(number)}  className='link'>
                        {number} 
                        </button>
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Pagination;