import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			 Blogs: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/Blogs');
			let Blogs = await r.json();
			this.setState({ Blogs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Hello Michael!</h1>
				<ul className="list-group">
					{this.state.Blogs.map(blog => {
						return <li className="list-groups-items" key={`blog-${blog.id}`}>{blog.title}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

interface IAppState {
	Blogs: Array<{id: number, title: string, content: string, authorid: number, _created: Date}>;
}

export default App;
