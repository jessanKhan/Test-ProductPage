import React from 'react';


const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1 || pagesCount === undefined) return null;

    return (
        <nav>
            <ul className="pagination">
                <ul class="pagination">
                    <li class="page-item" onClick={() => onPageChange("-")}>
                        <div class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </div>
                    </li>
                    <li class="page-item" onClick={() => onPageChange("+")}>
                        <div class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </div>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
export default Pagination;