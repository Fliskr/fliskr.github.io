// increment
export function increment(index) {

    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


//remove comment
export function removeComment(postId, i) {

    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}

// export function changeRows(index) {
//     return {
//         type: 'CHANGE_ROWS',
//         index
//     }
// }

// export function changeCols(index) {
//     return {
//         type: 'CHANGE_COLS',
//         index
//     }
// }

export function changeMaxlength(index) {
    return {
        type: 'CHANGE_MAX',
        index
    }
}

export function startGame(isRun){
	return {
		type :'CHANGE_GAME_MODE',
		isRun
	}
}
// export default {
// 	increment,
// 	addComment,
// 	removeComment
// }
