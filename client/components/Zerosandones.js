import React from 'react';
import Gameboard from './Gameboard.js';

	function DrawButton(props){
		let x = <button className='btn-start'>Refresh</button>;
		if (props.isRun){
			x = <button className='btn-start' onClick={props.drawGB} name={props.maxLength} >{!props.isRun?"Start":"Refresh"}</button>
		}
		return x
	}
class Zerosandones extends React.Component {

    changeRows(e) {
        let value = parseInt(e.target.value,10);

        if (value > 15) {
            value = 15;
        } else if (value < 3) {
            value = 3;
        }
        this.props.changeMaxlength(value);
    }

    drawGB(){
    	if (this.props.zeros.isRun){
    		this.props.startGame(false);
    	}
    }

    render() {
        return (
         	<div className='zerosandones' >
            	<div className='zerosandones_panel'>
            		<DrawButton  drawGB={this.drawGB.bind(this)} {...this.props.zeros}/>
            		<input type='number' disabled={this.props.zeros.isRun} value={this.props.zeros.maxLength} onChange={this.changeRows.bind(this)} />
            	</div>
            	<Gameboard {...this.props }/>
        	</div>
        )
    }
};

export default Zerosandones;
