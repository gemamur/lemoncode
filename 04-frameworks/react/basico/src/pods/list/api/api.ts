import { MemberEntityApi } from "./list.api.model";

export const getMemberCollection = (company:string): Promise<MemberEntityApi[]> => {
    return fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => response.json())
}