import React from 'react';

const Table = React.createClass({
	renderHeaderCell(cell,i){
		return (
				<th key={i}>{cell}</th>
			)
	},
	renderCells(cell,x){
		
			return (

				x.map((t,i)=>{return (
						<td key={i}><input type='text' value={cell[t]} /></td>
					) })	
			)

	},
	renderRow(row,i){	
		return (
			<tr key={i}>
				{this.renderCells(row,this.tableHeader)}
			</tr>
		)
	},
	render() {
		// const {postId}=this.props.params;
		// const i = this.props.posts.findIndex((post) => post.code === postId);
		const posts = this.props.posts;
		this.tableHeader= Object.keys(posts[0]);

		// const postComments = this.props.comments[postId] || [];
		return (
			<table>
				<thead>
					<tr>
						{this.tableHeader.map(this.renderHeaderCell) }
					</tr>
				</thead>
				<tbody>{posts.map(this.renderRow)}</tbody>
			</table>
		)
	}
});

export default Table;