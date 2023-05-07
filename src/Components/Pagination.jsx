import '../Styles/Pagination.css'

const Pagination = ( {goToNext , goToPrevious} ) => {
    return (
        <div className="pagination-wrapper">
            { goToPrevious && <button onClick={goToPrevious}>Previous</button>}
            { goToNext && <button onClick={goToNext}>Next</button>}
        </div>
    )
}

export default Pagination;