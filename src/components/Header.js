import React, { Component } from 'react';
import './styles/Header.scss';

// Icons
import { GiReturnArrow } from 'react-icons/gi';

let baseUrl = 'https://www.googleapis.com/youtube/v3/search';

class Header extends Component {
	state = { value: '', videos: [] };

	getVideos = async (term) => {
		try {
			const response = await fetch(
				`${baseUrl}?part=snippet&q=${term}&type=video&maxResults=10&order=viewCount&key=AIzaSyDDE_MP_h_rAIHGOkOTHHeOJSsvqUoFvqs`,
				{ mode: 'cors' },
			);
			const data = await response.json();
			const videos = data.items;
			this.setState({ videos: videos });
		} catch (error) {
			console.log(error);
		}
	};
	handleInputChange = (e) => {
		this.setState({ value: e.target.value });
	};
	handleKeyPressed = (e) => {
		if (e.key === 'Enter') {
			this.submitVideos();
		}
	};
	submitVideos = async () => {
		if (this.state.value !== '') {
			await this.getVideos(this.state.value);
			this.props.submit(this.state.value, this.state.videos);
			this.setState({ value: '' });
		}
	};

	render() {
		return (
			<div className="row header mt-3 no-gutters">
				<div className="col-12 col-md-3">
					<div className="logo">
						<GiReturnArrow className="yt-icon" />
						QuickVideo
					</div>
				</div>

				<div className="col-10 col-md-4 input-col">
					<input
						type="text"
						className="form-control "
						placeholder="Astronomia..."
						value={this.state.input}
						onChange={this.handleInputChange}
						onKeyDown={this.handleKeyPressed}
					/>
				</div>
				<div className="col-12 col-md-2 ml-0">
					<h1 className="btn btn-danger" onClick={this.submitVideos}>
						Search
					</h1>
				</div>
			</div>
		);
	}
}
export default Header;
