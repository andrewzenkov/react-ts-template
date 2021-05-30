import React, { FunctionComponent, memo } from "react";
import { Switch } from "react-router-dom";

import { IRoutePageComponentProps } from "types/route.types";
import { renderRoutes } from "utils/helpers";

import "./Users.scss";

const Users: FunctionComponent<IRoutePageComponentProps> = ({
	childrenRoutes,
}) => {
	console.log({childrenRoutes})

	return (
		<div className="">
			<Switch>{renderRoutes(childrenRoutes)}</Switch>
		</div>
	);
};

export default memo(Users);
