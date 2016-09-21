import React,{Component} from 'react';
import {connect} from 'react-redux';


class BookDetails extends Component{
	render(){
		if(!this.props.selectedBook){
			return <div>Please choose a book to be displayed!!!</div>
		}
		return(
			<div>
				<h3>Book Details</h3>
				<div>{this.props.selectedBook.title}</div>
				<div>{this.props.selectedBook.pages}</div>
			</div>
			);
	}

}

function mapStateToProps(state){
	return({
		selectedBook:state.selected_book
	});
}

export default connect(mapStateToProps)(BookDetails);
