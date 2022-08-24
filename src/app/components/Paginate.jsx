import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'

import style from './Paginate.module.css'

const Paginate = ({ pageCount, onPageClick }) => {
    return (
        <ReactPaginate
            className={style.pagination}
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    )
}

Paginate.propTypes = {
    pageCount: PropTypes.number,
    onPageClick: PropTypes.func
}
export default Paginate
