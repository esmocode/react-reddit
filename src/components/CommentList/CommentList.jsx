import React, { Component } from 'react';
import Comment from '../Comment/Comment'


import './CommentList.scss';

class CommentList extends Component {

	render() {

		let parent = this.props.parent
		let comments = this.props.comments.filter(c => c.parent_id === this.props.parent.id)
		let childrenComments =
			comments.map(c => <CommentList key={c.id} parent={c} comments={this.props.comments} />);

		if (childrenComments.length === 0) {
			return (
				<div>
					<Comment comment={parent} />
				</div>
			)
		} else {
			return (
        <div>
          <Comment comment={parent}/>
          <div style={{'marginLeft': '20px'}}>{childrenComments}</div>
        </div>
			)
		}
	}

}

CommentList.defaultProps = {
	comments: [],
	parent: null
};

export default CommentList;