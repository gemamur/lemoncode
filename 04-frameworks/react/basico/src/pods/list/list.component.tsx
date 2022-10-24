import React from "react";
import { MemberEntity } from "./list.vm";
import { Link } from "react-router-dom";
import { routes } from "@/core/router/routes";
import  ListPagination from "./list.pagination.component";
import { Grid } from "@mui/material";

interface Props {
    members: MemberEntity[];
} 

export const List = (props:Props) => {

    const { members } = props;
    const [totalPages, setTotalPages] = React.useState(1);
    const [itemsPage] = React.useState(5);
    const [currentPage, setCurrentPage] = React.useState(1);
    const lastItemToShow = currentPage * itemsPage;
    const firstItemToShow = lastItemToShow - itemsPage;

    const showItems = members.slice(firstItemToShow,lastItemToShow);

    React.useEffect(() => {
      setTotalPages(Math.ceil(members.length/itemsPage));
    }, [members]);
    
    return (
        <>
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          {showItems.map((member) => (
            <React.Fragment key={member.id}>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link to={routes.detail(member.login)}>{member.login}</Link>
            </React.Fragment>
          ))}
        </div>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <ListPagination pages={totalPages} setCurrentPage={setCurrentPage}/>
        </Grid>
        </>
    );
};