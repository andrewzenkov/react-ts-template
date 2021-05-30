import React, { FunctionComponent, memo } from "react";
import { Switch } from "react-router-dom";

import { IRoutePageComponentProps } from "types/route.types";
import { renderRoutes } from "utils/helpers";

const Root: FunctionComponent<IRoutePageComponentProps> = ({
	childrenRoutes,
}) => {
	console.log(process)

	return <Switch>{renderRoutes(childrenRoutes)}</Switch>;
};

export default memo(Root);
