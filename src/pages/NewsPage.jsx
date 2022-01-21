import { Avatar, Card, Col, Image, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import React from "react";
import { useNewsSearchQuery } from "../services/cryptoNewsApi";

function NewsPage() {
	const { data: news, isFetching } = useNewsSearchQuery({ newsCategory: "Cryptocurrency", count: 10 });

	if (isFetching) return "Loading...";
	console.log(news);
	return (
		<Row gutter={[16, 16]}>
			{news.value.map((n, i) => (
				<Col key={i} xs={24} md={12} lg={8}>
					<a href={n.url}>
						<Card hoverable>
							<div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
								<Title level={5}>{n.name}</Title>
								{n.image && (
									<Image
										preview={false}
										style={{ width: "100px", maxHeight: "100px" }}
										src={n.image.thumbnail.contentUrl}
									/>
								)}
							</div>
							<Paragraph
								ellipsis={{
									rows: 4,
									expandable: false,
								}}
								title={`${n.description} ...`}
								type="secondary"
							>
								{n.description}
							</Paragraph>

							<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
								{n.provider.length && (
									<div style={{ display: "flex", alignItems: "center" }}>
										<Avatar size={25} src={n.provider[0].image.thumbnail.contentUrl} />
										<Text type="secondary" style={{ marginLeft: "10px" }}>
											{n.provider[0]?.name}
										</Text>
									</div>
								)}
								<Text type="secondary">{moment(n.datePublished).startOf("ss").fromNow()}</Text>
							</div>
						</Card>
					</a>
				</Col>
			))}
		</Row>
	);
}

export default NewsPage;
