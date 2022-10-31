import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import CreateBlog from './views/CreateBlog';
import EditBlog from './views/EditBlog';
import SingleBlog from './views/SingleBlog';
import AllBlogs from './views/AllBlogs';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<CreateBlog />} />
				<Route path="/blogs" element={<AllBlogs />} />
				<Route path="/blogs/:id" element={<SingleBlog />} />
				<Route path="/blogs/:id/edit" element={<EditBlog />} />
			</Routes>
		</BrowserRouter>
	)

};

export default App;