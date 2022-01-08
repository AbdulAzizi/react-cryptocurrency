import { Avatar, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Navbar = () => {
	return (
		<>
			<Avatar src={"https://image.pngaaa.com/496/1369496-middle.png"} size="large" />
			<Typography>
				<Title level={2} className="logo">
					<Link to="/">Cryptoverse</Link>
				</Title>
			</Typography>
		</>
	);
};

export default Navbar;
