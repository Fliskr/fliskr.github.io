import React from 'react';

class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cells: this.createEmptyCells(), lastChar: "O" }
    }

    createEmptyCells() {
        var cells = [];
        var maxLength = this.props.zeros.maxLength;
        for (let i = 0; i < maxLength; i++) {
            cells.push([]);
            for (let j = 0; j < maxLength; j++) {
                cells[i].push("");
            }
        }
        console.log(cells);
        return cells;
    }

    componentDidMount() {
        this.canvas = this.refs.zerosandones;
        this.context = this.refs.zerosandones.getContext('2d');
        this.drawBoard();
    }

    drawBoard() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (this.props.zeros.isRun) {
            this.context = this.refs.zerosandones.getContext('2d');
            this.state.cells.forEach((row, i) => row.forEach((cell, j) => {
                let x = this.canvas.width / this.props.zeros.maxLength * j;
                let y = 0 + this.canvas.height / this.props.zeros.maxLength * i;
                let w = this.canvas.width / this.props.zeros.maxLength;
                let h = this.canvas.height / this.props.zeros.maxLength;
                let fontSize = this.canvas.height / (this.props.zeros.maxLength * 1.5);
                this.context.strokeStyle = 'grey';
                this.context.strokeRect(x, y, w, h);
                this.context.font = fontSize + 'px Arial';
                this.context.fillText(cell, x + fontSize / 2, y + fontSize);
            }))
        } else {
            this.context.font = this.canvas.width / 7 + 'px Arial';
            this.context.fillText('Победили ' + this.state.lastChar, 30, this.canvas.height / 2);
        }
    }

    componentDidUpdate(nextProps, nextState) {
        console.log(1);
        this.drawBoard();
        if (this.props.zeros.isRun) {
            this.checkWin();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(2);
        this.drawBoard();

    }

	/*
    Check each row of array for winnig line
    @params
    	@ arr Array of gameboard's cells
    	@ max Int Number of lines
    	@ diff Int Max line possible
     */
    checkRows(arr, max, diff) {
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max - diff + 1; j++) {
                if (arr[i][j]) {
                    if (diff == 3 && arr[i][j] == arr[i][j + 1] && arr[i][j + 2] == arr[i][j]) {
                        return true;
                    }
                    if (diff == 4 && arr[i][j] == arr[i][j + 1] && arr[i][j + 2] == arr[i][j] && arr[i][j + 3] == arr[i][j]) {
                        return true;
                    }
                    if (diff == 5 && arr[i][j] == arr[i][j + 1] && arr[i][j + 2] == arr[i][j] && arr[i][j + 3] == arr[i][j] && arr[i][j + 4] == arr[i][j]) {
                        return true;
                    }
                }
            }
        }
    }

    /*
    Check each column of array for winnig line
    @params
    	@ arr Array of gameboard's cells
    	@ max Int Number of lines
    	@ diff Int Max line possible
     */
    checkCols(arr, max, diff) {
        for (let j = 0; j < max; j++) {
            for (let i = 0; i < max - diff + 1; i++) {
                if (arr[i][j]) {
                    if (diff == 3 && arr[i][j] == arr[i + 1][j] && arr[i + 2][j] == arr[i][j]) {
                        return true;
                    }
                    if (diff == 4 && arr[i][j] == arr[i + 1][j] && arr[i + 2][j] == arr[i][j] && arr[i + 3][j] == arr[i][j]) {
                        return true;
                    }
                    if (diff == 5 && arr[i][j] == arr[i + 1][j] && arr[i + 2][j] == arr[i][j] && arr[i + 3][j] == arr[i][j] && arr[i + 4][j] == arr[i][j]) {
                        return true;
                    }
                }
            }
        }
    }
	
	/*
	Check diagonal lines and divide array on minimal pieces recursively
	 */    
    checkLines(arr, max, diff) {
        let e = 0;
        let ok = false;
        while (e < diff - 1) {
            if (!arr[e][e]) {
                break;
            }
            ok = arr[e][e] == arr[e + 1][e + 1] && !!arr[e][e]
            e++;
        }
        if (ok) {
            return ok;
        }
        e = 0;
        while (e < diff - 1) {
            if (!arr[max - 1 - e][e]) {
                break;
            }
            ok = arr[max - 1 - e][e] == arr[max - e - 2][e + 1] && !!arr[max - 1 - e][e]
            e++;
        }
        if (ok) {
            return ok;
        }
        if (diff != max) {
            for (let i = 0; i <= max - diff; i++) {
                for (let j = 0; j <= max - diff; j++) {
                    let littleArr = arr.slice(i, diff + i).map((slicedArr) => slicedArr.slice(j, diff + j))
                    let result = this.checkLines(littleArr, diff, diff);
                    if (result) {
                        return result
                    }

                }
            }
        }

    }

    /*
    	Check win on each change of state/props
     */
    checkWin() {
        let aCells = this.state.cells;
        let diff = this.props.zeros.maxLength - 4;
        if (diff < 0) {
            diff = 3;
        } else if (diff > 0) {
            diff = 5;
        } else {
            diff = 4;
        }
        let x = this.checkRows(aCells, this.props.zeros.maxLength, diff);
        let y = this.checkCols(aCells, this.props.zeros.maxLength, diff);
        let z = this.checkLines(aCells, this.props.zeros.maxLength, diff);
        if (x || y || z) {
            this.props.startGame(false);
            this.setState({ cells: this.createEmptyCells() }, this.drawBoard())
        }

    }

    /*
    	Check coordinate is in between X or Y coordinate to enable click event
     */
    inBetween(x) {
        let w = this.canvas.width / this.props.zeros.maxLength;
        let x1 = Math.floor(x / w);
        if (x < 0) { x1 = 0 }
        return x1
    }

    /*
    	Click event opeartor
     */
    tileClick(e) {
        if (!this.props.zeros.isRun) {
            this.props.startGame(true);
            this.setState({ cells: this.createEmptyCells(), lastChar: "O" }, this.drawBoard())
        } else {
            let msEvt = e.nativeEvent;
            let cells = this.state.cells;
            if (!cells[this.inBetween(msEvt.offsetY)][this.inBetween(msEvt.offsetX)]) {
                var newChar = this.state.lastChar == "X" ? "O" : "X";
                cells[this.inBetween(msEvt.offsetY)][this.inBetween(msEvt.offsetX)] = newChar;
                this.setState({ cells: cells, lastChar: newChar }, this.drawBoard())
            }
        }
    }


    render() {
        return (
            <div>
				<canvas onClick={this.tileClick.bind(this)} ref='zerosandones' width='300px' height= '300px' />
				<div>Ходит {this.state.lastChar=="X"?"O":"X"}</div>
			</div>
        )
    }
};

export default Gameboard;
