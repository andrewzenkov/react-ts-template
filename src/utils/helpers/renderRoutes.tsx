import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import { IRoute } from "types/route.types";

export const renderRoutes = (routes: IRoute[]) =>
	routes.map(({ childrenRoutes, component: Component, exact, path }: IRoute, i: number) => (
		<Route
			key={i}
			path={path}
			exact={exact}
			render={(props: RouteComponentProps) => (
				<Component {...props} childrenRoutes={childrenRoutes} />
			)}
		/>
	));
