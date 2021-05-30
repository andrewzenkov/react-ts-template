import React, { FunctionComponent, memo } from "react";

import { IRoutePageComponentProps } from "types/route.types";

import styles from "./User.module.scss";

interface IUser extends IRoutePageComponentProps {}

const User: FunctionComponent<IUser> = ({ match }) => {
    console.log({styles})

	return <div className="">User ID</div>;
};

export default memo(User);
