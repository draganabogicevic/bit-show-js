import ReactPaginate from 'react-paginate'

// @ts-ignore
import style from '../components/Paginate.module.css'

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

export default Paginate
