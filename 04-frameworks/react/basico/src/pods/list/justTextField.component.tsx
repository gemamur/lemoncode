import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Search from "@mui/icons-material/Search";

interface Props{
    company:string;
    setCompany:React.Dispatch<React.SetStateAction<string>>;
}

export const JustTextField = (props:Props) => {

    const {company, setCompany} = props;
    return(
        <>
        <TextField id="search" size="small" label="Search" variant="outlined" margin="dense" value={company} onChange={(e) => setCompany(e.target.value.toLowerCase())} 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}/>
        </>
    );
    
    
}