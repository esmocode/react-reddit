import React, { Component } from 'react';
import parse from 'html-react-parser';
import { removeComment } from '../../store/actions/commentActions'
import { connect } from 'react-redux'
import { unescape } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTimeAgo from 'react-time-ago'

import './Comment.scss';
class Comment extends Component {
	kFormatter(num) {
		return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
	}
	render() {
		const { body_html, permalink, id, author, created_utc, ups, downs } = this.props.comment;
		let time = parseInt(created_utc + "000");
		let vote = parseInt(ups - downs);

		return (
			<div className="comment">

				<div className="cotntent">
					<div className="author">
						<a href={`https://reddit.com${permalink}`}>{author}</a> - <small>{this.kFormatter(vote)} Points.</small> -  <ReactTimeAgo date={time} />
					</div>
					<div className="html">
						{parse(unescape(body_html))}
					</div>
				</div>
				<div className="actions">
					<button className="delButton" onClick={() => this.props.removeComment(id)}>
						<FontAwesomeIcon icon={faTimesCircle} />
					</button>
				</div>
			</div>
		)
	}

}

Comment.defaultProps = {
	comment: {},
};

export default connect(null, { removeComment })(Comment);