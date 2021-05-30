import React, { FunctionComponent, memo } from "react";

import { IRoutePageComponentProps } from "types/route.types";

const Home: FunctionComponent<IRoutePageComponentProps> = () => {
	return <div>Home</div>;
};

export default memo(Home);
