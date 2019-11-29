import React, { Component } from 'react';

class PostHeader extends Component {



	render() {
		const { score, title,subreddit_name_prefixed } = this.props.post;
		return (
			<div className="header">
				<div className="permalink">
					{subreddit_name_prefixed}
				</div>
				<div className="headline">
					<div className="likes">{Math.sign(score) * ((Math.abs(score) / 1000).toFixed(1)) + 'k'}</div>
					<div className="title"><h1>{title}</h1></div>
				</div>
			</div>
		);
	}
}

export default PostHeader;