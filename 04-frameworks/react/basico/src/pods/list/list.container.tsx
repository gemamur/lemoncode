import React from "react";
import { List } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./api/api";
import { mapMemberEntityListToVM } from "./list.mapper";
import { ListSearch } from "./list.search.component";
import {useDebounce} from "use-debounce";

export const ListContainer  = () => {

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [company, setCompany] = React.useState("lemoncode");
  const [debounce]=useDebounce(company, 1000);

  React.useEffect(() => {
    getMemberCollection(company).then(mapMemberEntityListToVM).then(setMembers);
  }, [company]); //en esta linea cambiar company por debounce si se activa el justTextField como componente de búsqueda
  

  

    return (
    <React.Fragment>
        <ListSearch company={company} setCompany={setCompany} />
        <List members={members} />
    </React.Fragment>
     );
}