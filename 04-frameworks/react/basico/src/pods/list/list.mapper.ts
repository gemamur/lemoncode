import { getMemberCollection } from "./api/api";
import { MemberEntityApi } from "./api/list.api.model";
import { MemberEntity } from "./list.vm";

export const mapMemberEntityListToVM = (memberEntity: MemberEntityApi[]): MemberEntity[] => {
    return memberEntity.map(mapMemberEntityToVM);
};

export const mapMemberEntityToVM = (member: MemberEntityApi): MemberEntity => {
    return {
        id: member.id,
        login: member.login,
        avatar_url: member.avatar_url,
    };
};