import React from 'react';
import styles from './Pagination.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Pagination = ({ nPages, currentPage, setCurrentPage,countofList, indexOfFirstRecord,indexOfLastRecord }) => {   

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <div className={styles.paginationCSS}>
                <div className={styles.indexOfLast}>{indexOfLastRecord}<span className={styles.downArrow}><KeyboardArrowDownOutlinedIcon /></span></div>
                <div className={styles.pageNum}>{indexOfFirstRecord+1 + "-" + indexOfLastRecord + " of " + countofList}</div>
                <button onClick={goToPrevPage} className={styles.btn}><KeyboardDoubleArrowLeftIcon fontSize="large"  color="action"/></button>
                <button onClick={goToPrevPage} className={styles.btn}><ArrowBackIosIcon fontSize="small"  color="action"/></button>
                <button onClick={goToNextPage} className={styles.btn}><ArrowForwardIosIcon fontSize="small"  color="action"/></button>
                <button onClick={goToNextPage} className={styles.btn}><KeyboardDoubleArrowRightIcon fontSize="large"  color="action"/></button>

            </div>
        </nav>
    )
}

export default Pagination