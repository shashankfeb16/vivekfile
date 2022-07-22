import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import SingleNews from '../components/SingleNews';
import News from './News';

const MainRoutes = () => {
  return (
		<Routes>
			<Route path='/' element={<News></News>}></Route>
			<Route path="/news/:id" element={<SingleNews></SingleNews>}></Route>
		</Routes>
	);
}

export default MainRoutes