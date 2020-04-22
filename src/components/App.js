import React from 'react';

import Header from './Header';
import Video from './Video';

import ListOfVideos from './ListOfVideos';

import './styles/App.scss';

//

class App extends React.Component {
	state = {
		searchBarValue: '',
		videos: [],
	};

	handleSearchValue = (term, data) => {
		console.log(term, data);
		if (data[0].id.videoId) {
			this.setState({
				searchBarValue: term,
				videos: data,
				currentVideo: data[0],
			});
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="container">
					<Header submit={this.handleSearchValue} />
				</div>

				<div className="row mt-5">
					<div className="col-12 col-lg-9 video-col">
						<Video
							currentVideo={
								this.state.currentVideo ? this.state.currentVideo : null
							}
						/>
					</div>
					<div className="col-12 col-lg-3 ">
						<ListOfVideos />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
