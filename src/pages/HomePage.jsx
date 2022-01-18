import { Button, Col, Row, Statistic } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "../components/Cryptocurrencies";

function HomePage() {
	const { data, isFetching } = useGetCryptosQuery(10);
	const stats = data?.data?.stats;
	if (isFetching) return "Loading...";

	return (
		<>
			<Row>
				<Col span={24}>
					<Title level={2}>Global Crypto Stats</Title>
				</Col>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value={stats.total} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Exchanges" value={stats.totalExchanges} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Market Cap" value={millify(stats.totalMarketCap)} />
				</Col>
				<Col span={12}>
					<Statistic title="Total 24th Volume" value={millify(stats.total24hVolume)} />
				</Col>
				<Col span={12}>
					<Statistic title="Total Markets" value={millify(stats.totalMarkets)} />
				</Col>
			</Row>
			<Row justify="space-between" align="middle">
				<Title level={2}>Top 10 Cryptocurrencies in the world</Title>
				<Button type="link">Show more</Button>
			</Row>
			<Row justify="space-between" align="middle">
				<Cryptocurrencies itemsNumber={10} />
			</Row>
		</>
	);
}

export default HomePage;
