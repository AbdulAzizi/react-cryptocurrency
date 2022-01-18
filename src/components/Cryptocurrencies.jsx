import { Card, Col, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies({ itemsNumber }) {
	const { data, isFetching } = useGetCryptosQuery(itemsNumber || 10);
	const [cryptos, setCryptos] = useState([]);
	console.log(cryptos);
	if (isFetching) return "Loading...";
	else if (cryptos.length == 0) {
		setCryptos(data?.data?.coins);
	}

	return (
		<>
			<Row gutter={[32, 32]}>
				{cryptos.map((currency) => (
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
