import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import news from '../data/newsData';

const SingleNews = () => {
	const {id} = useParams();
	const[singlenews,setSingleNews] = useState({});
	useEffect(()=>{
		if(id){
			const new_news = news.find((el)=>el.id===Number(id));
			setSingleNews(new_news);
		}
	},[])
	console.log(singlenews);
  return (
	<div>
		<img src={singlenews.img} alt="" />
	</div>
  )
}

export default SingleNews