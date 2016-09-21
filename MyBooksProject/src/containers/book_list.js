import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/select_book'

class BookList extends Component{
	render(){
		const bookList=this.props.books.map((book)=>{
			return <li key={book.title} onClick={()=>this.props.selectBook(book)}>
						{book.title}
					</li>});
		return (
			<ul>
				{bookList}
			</ul>);
	}
}

function mapStateToProps(state){
	return({
		books:state.books
	});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);