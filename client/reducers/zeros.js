// a reducer takes in two things:
// 1.action
// 2.current state of store
// 
function zeros(state = [], action) {
	console.log(state)
    switch (action.type) {
        case 'CHANGE_COLS':
            return state
        case 'CHANGE_ROWS':
            return state
        case 'CHANGE_GAME_MODE':
            return {...state,isRun:action.isRun}
        case 'CHANGE_MAX':
        	console.log(action.index)
            return {...state,maxLength:action.index};
        default:
            return state;
    }
}

export default zeros
