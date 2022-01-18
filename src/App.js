import React from "react";
// import Navbar from "./components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import { Avatar, Layout, List, Menu, Space, Typography } from "antd";
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
import HomePage from "./pages/HomePage";
import ExchangesPage from "./pages/ExchangesPage";
import CryptocurrenciesPage from "./pages/CryptocurrenciesPage";
import CryptocurrencyPage from "./pages/CryptocurrencyPage";
import NewsPage from "./pages/NewsPage";

const { Footer, Sider, Content } = Layout;

const App = () => {
	return (
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
					<Menu.Item key="/" icon={<HomeOutlined />}>
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
				<Content style={{ margin: "20px" }}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/exchanges" element={<ExchangesPage />} />
						<Route path="/cryptocurrencies" element={<CryptocurrenciesPage />} />
						<Route path="/cryptocurrencies/:id" element={<CryptocurrencyPage />} />
						<Route path="/news" element={<NewsPage />} />
					</Routes>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					<Typography.Title level={5}>
						Cryptocurrency
						<br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
