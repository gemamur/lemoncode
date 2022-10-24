import React from "react";
import { TextField, Button } from "@mui/material";
import Search from "@mui/icons-material/Search";

interface Props{
    company:string;
    setCompany:React.Dispatch<React.SetStateAction<string>>;
}

export const FormSearch = (props:Props) => {

    const {company, setCompany} = props;
    
    const [companySearch, setCompanySearch] = React.useState(company);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCompany(companySearch);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
          <TextField id="search" size="small" label="Search" variant="outlined" margin="dense" value={companySearch} onChange={(e) => setCompanySearch(e.target.value.toLowerCase())} />
          <Button id="search-button" type="submit" variant="outlined" startIcon={<Search />}>Go!</Button>
        </form>
        
        </>
    );
    
    
}