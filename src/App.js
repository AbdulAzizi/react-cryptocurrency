import React from "react";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, useLocation, Link, Route, Routes } from "react-router-dom";
import { Avatar, Layout, List, Menu } from "antd";
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Cryptocurrency from "./pages/Cryptocurrency";
import News from "./pages/News";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
	return (
		<Router>
			<Layout>
				<Sider width="250" className="site-layout-background">
					<List itemLayout="horizontal" style={{ padding: "0px 15px" }}>
						<List.Item>
							<List.Item.Meta
								avatar={
									<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" />
								}
								title={
									<a style={{ fontSize: "20px", color: "white" }} href="https://ant.design">
										Cryptocurrency
									</a>
								}
							/>
						</List.Item>
					</List>
					<Menu theme="dark" defaultSelectedKeys={[window.location.pathname]}>
						<Menu.Item key="/home" icon={<HomeOutlined />}>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item key="/cryptocurrencies" icon={<FundOutlined />}>
							<Link to="/cryptocurrencies">Cryptocurrencies</Link>
						</Menu.Item>
						<Menu.Item key="/exchanges" icon={<MoneyCollectOutlined />}>
							<Link to="/exchanges">Exchanges</Link>
						</Menu.Item>
						<Menu.Item key="/news" icon={<BulbOutlined />}>
							<Link to="/news">News</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Content>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/exchanges" element={<Exchanges />} />
							<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
							<Route path="/cryptocurrencies/:id" element={<Cryptocurrency />} />
							<Route path="/news" element={<News />} />
						</Routes>
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</Router>
	);
};

export default App;
