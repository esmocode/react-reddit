import { connect } from 'react-redux';
import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import PostContent from './PostContent';
import PostHeader from './PostHeader'
import { getPost } from '../../store/actions/postActions';
import { getComments } from '../../store/actions/commentActions';
import { orderBy } from 'lodash';
import './Post.scss';

class Post extends Component {

	componentDidMount() {
		this.props.getPost();
		this.props.getComments();
	}

	render() {
		
		const { post } = this.props;
		
		let thread = this.props.comments.filter(c => c.parent_id === undefined);
		let sortedComments = orderBy(this.props.comments, 'created_utc');

		return (
			<div className="container">
				<article>
					<div className="wrapper">
						<PostHeader post={post} />
						<div className="content-wrap">
							<PostContent post={post} />
							{thread.map(c => <CommentList key={c.id} comments={sortedComments} parent={c} />)}
						</div>
					</div>
				</article>
			</div>
		);
	}
}

Post.defaultProps = {
	post: {
		comments:[]
	},
	comments: [],
};

const mstp = state => ({
	post: state.post.postItem,
	comments: state.comments.items
});

export default connect(mstp, { getPost, getComments })(Post);