import { generatePath } from 'react-router-dom';
interface SwitchRoutes {
    root: string;
    list: string;
    detail: string;
}
export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list",
    detail: "/detail/:login",
};

interface Routes extends Omit<SwitchRoutes, "detail">{
    detail: (login:string) => string;
}

export const routes: Routes = {
    root: "/",
    list: "/list",
    detail: (login:string) => generatePath(switchRoutes.detail, {login}),
};