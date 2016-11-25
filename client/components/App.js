import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

function mapStateToProps(state){
	return {
		posts:state.posts,
		comments:state.comments,
		zeros:state.zeros,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}

const App = connect (mapStateToProps,mapDispatchToProps)(Main);
 
export default App;