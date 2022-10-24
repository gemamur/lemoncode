import React from "react";
import { useParams } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";
import { Detail } from "./detail.component";

const createDefaultMemberDetail = () => ({
    id: "",
    login: "",
    name: "",
    company: "",
    bio: "",
  });

export const DetailContainer = () =>{
    const [member, setMember] = React.useState<MemberDetailEntity>(
        createDefaultMemberDetail()
      );
      const { login } = useParams()
      React.useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
          .then((response) => response.json())
          .then((json) => setMember(json));
      }, []);
    return (
    <>
        <Detail member={member} />
    </>
    );
}