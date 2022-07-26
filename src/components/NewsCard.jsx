import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ data }) => {
	//console.log(data)
	return (
		<div className={styles.container} key={data.id}>
			<div className={styles.firstChild}>
				<img src={data.img} alt="" width="100%" height="100%" />
			</div>
			<div className={styles.secondChild}>
				<h3>{data.heading}</h3>
				<p>{data.description}</p>
			</div>
		</div>
	);
};

export default NewsCard;
