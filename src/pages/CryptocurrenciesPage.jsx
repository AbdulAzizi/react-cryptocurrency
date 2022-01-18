import { Row } from "antd";
import React from "react";
import Cryptocurrencies from "../components/Cryptocurrencies";

function CryptocurrenciesPage() {
	return (
		<Row justify="space-between" align="middle">
			<Cryptocurrencies itemsNumber={100} />
		</Row>
	);
}

export default CryptocurrenciesPage;
