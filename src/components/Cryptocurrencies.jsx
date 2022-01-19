import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies({ itemsNumber, filterable } = { filterable: false }) {
	const { data, isFetching } = useGetCryptosQuery(itemsNumber || 10);
	const [cryptos, setCryptos] = useState([]);
	const [filterString, setFilterString] = useState("");

	if (isFetching) return "Loading...";
	else if (cryptos.length == 0) {
		setCryptos(data?.data?.coins);
	}

	return (
		<>
			{filterable && (
				<Row style={{ marginBottom: "30px" }}>
					<Col span={24}>
						<Input
							onChange={(e) => {
								setFilterString(e.target.value);
							}}
							size="large"
							placeholder="Search"
							prefix={<SearchOutlined />}
						/>
					</Col>
				</Row>
			)}
			<Row gutter={[32, 32]}>
				{cryptos
					.filter((c) => c.name.toLowerCase().includes(filterString.toLowerCase()))
					.map((currency) => (
						<Col xs={24} sm={12} lg={6} key={currency.uuid}>
							<Link to={`crypto/${currency.uuid}`}>
								<Card
									title={`${currency.rank} ${currency.name}`}
									extra={<img width={30} alt="" src={currency.iconUrl} />}
									hoverable
								>
									<p>Price: {millify(currency.price)}</p>
									<p>Market Cap: {millify(currency.marketCap)}</p>
									<p>Daily Changes: {millify(currency.change)}</p>
								</Card>
							</Link>
						</Col>
					))}
			</Row>
		</>
	);
}

export default Cryptocurrencies;
