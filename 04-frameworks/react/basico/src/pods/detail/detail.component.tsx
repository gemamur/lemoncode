import React from "react";
import { Link } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";
import {Box, Paper, Grid} from '@mui/material';

interface Props {
    member: MemberDetailEntity;
}

export const Detail = (props: Props) => {
    const {member} = props;
    return <>
    <Grid container direction="row" justifyContent="center" alignItems="center" >
    <Box sx={{
        width: 400,
        backgroundColor: '#02c26b', p: 3,
        }}>
          <Paper elevation={3} sx={{backgroundColor:'#86bea5'}}>
          <h3>User ID: {member.login}</h3>
        <p> ID: {member.id}</p>
        <p> Login: {member.login}</p>
        <p> Name: {member.name}</p>
        <p> Company: {member.company}</p>
        <p> Bio: {member.bio}</p>
          </Paper>
    </Box>
    </Grid>
    <Grid container justifyContent="center" >
    <Link to="/list">Back to list page</Link>
    </Grid>
    
      
    </>
}