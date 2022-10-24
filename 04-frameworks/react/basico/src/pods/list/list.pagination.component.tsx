import * as React from 'react';
import Pagination from '@mui/material/Pagination';

interface Props {
    pages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ListPagination(props:Props) {
    const {pages, setCurrentPage} = props;

    const handleChange = (event: React.ChangeEvent<unknown>, page:number) => {
        setCurrentPage(page);
    }
  return (
    <>
        <Pagination count={pages} onChange={handleChange}/>
    </>
  );
}