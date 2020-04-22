import React, { Component } from 'react';
import './styles/Video.scss';

class Video extends Component {
	render() {
		let videoObject = this.props.currentVideo;
		if (videoObject) {
			let title = videoObject.snippet.title;
			let fixedTitle;
			let date = videoObject.snippet.publishedAt.slice(0, 4);
			if (title.includes('&amp;') || title.includes('&quot;')) {
				let preFixedTitle = title.replace(/&amp;/g, '&');
				fixedTitle = preFixedTitle.replace(/&quot;/g, '"');
			} else {
				fixedTitle = title;
			}

			return (
				<div className="video-component">
					<div className="video-style no-gutters">
						<iframe
							className="iframe-style"
							src={`https://www.youtube.com/embed/${videoObject.id.videoId}?autoplay=1`}
							allow="autoplay"
							frameBorder="0"
							allowFullScreen></iframe>
					</div>
					<div className="video-title">
						<h3>{fixedTitle}</h3>
					</div>
					<div className="video-info d-flex justify-content-between">
						<div className="channel">
							<h4>{videoObject.snippet.channelTitle}</h4>
						</div>
						<div className="date">
							<p>{date}</p>
						</div>
					</div>
					<div className="video-desc">
						<div className="description">
							<p>{videoObject.snippet.description}</p>
						</div>
					</div>
				</div>
			);
		}
		return <div>Welcome to QuickVideo motherfucker</div>;
	}
}
export default Video;
