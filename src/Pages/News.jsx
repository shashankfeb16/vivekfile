import React from 'react';
import news from '../data/newsData';
import NewsCard from '../components/NewsCard';
import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-router-dom";

const News = () => {
    const [newsList, setNewsList] = useState(news);

	const handleFilter = (type) => {
		let updatedNews = news.filter((el) => {
			return el.type == type;
		});
		setNewsList(updatedNews);
		console.log(news);
	};

	return (
		<div style={{ width: "800px", margin: "auto" }} className="App">
			<div style={{ width: "580px", height: "100px" }}>
				<h3>News and Articles</h3>
				<ButtonWrapper>
					<button
						onClick={() => {
							handleFilter("Latest");
						}}
						className="btn"
					>
						LATEST
					</button>
					<button
						onClick={() => {
							handleFilter("News");
						}}
						className="btn"
					>
						NEWS
					</button>
					<button
						onClick={() => {
							handleFilter("OnThisDay");
						}}
						className="btn"
					>
						ON THIS DAY
					</button>
					<button
						onClick={() => {
							handleFilter("Match");
						}}
						className="btn"
					>
						MATCH RELATED
					</button>
					<button
						onClick={() => {
							handleFilter("Features");
						}}
						className="btn"
					>
						FEATURES
					</button>
				</ButtonWrapper>
			</div>
			{newsList.map((item) => (
				<Link to={`/news/${item.id}`}>
					<div key={item.id}>
						<NewsCard data={item} />
					</div>
				</Link>
			))}
		</div>
	);
}

export default News;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;