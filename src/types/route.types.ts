import { RouteComponentProps } from "react-router-dom";
import { FunctionComponent } from "react";

export interface IRoutePageComponentProps extends RouteComponentProps {
	childrenRoutes?: IRoute[];
}

export type IRoute = {
	path: string;
	exact?: boolean;
	component: FunctionComponent<IRoutePageComponentProps>;
	childrenRoutes?: IRoute[];
};
