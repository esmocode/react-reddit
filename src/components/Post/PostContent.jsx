import React, { Component } from 'react';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { unescape } from 'lodash'

class PostContent extends Component {
	render() {

		console.log(this.props);
		const { comments, selftext_html } = this.props.post;
		console.log(comments);
		console.log(comments.length);



		return (
			<div className="content">
				<div className="html">
					{parse(unescape(selftext_html))}
				</div>
				<div className="commentCount">
					<FontAwesomeIcon icon={faComment} /> {comments.length} comments.
				</div>
			</div>
		);
	}
}


export default PostContent;