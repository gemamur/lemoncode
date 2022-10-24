import React, { FormEventHandler } from "react";
import { Grid, TextField, Button } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Search from "@mui/icons-material/Search";
import { JustTextField } from "./justTextField.component"; //este hace lo mismo que el formSearch pero se ejecuta la búsqueda al terminar de escribir el texto sin tener que pulsar un botón
import { FormSearch } from "./formSearch.component";

interface Props{
    company:string;
    setCompany:React.Dispatch<React.SetStateAction<string>>;
}

export const ListSearch = (props:Props) => {

    const {company, setCompany} = props;

    return(
        <>
        <Grid className="search-bar">
                {/* <JustTextField company={company} setCompany={setCompany} /> */}
                <FormSearch company={company} setCompany={setCompany}/>
 
        </Grid>
        </>
        
    );
}