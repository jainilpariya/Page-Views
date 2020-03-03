import { NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE, GOTO_PAGE } from '../actions/types'

const INITIAL_STATE = {
    pageNo: 1,
    count: 20,
    total: 5000
}

export default (state = INITIAL_STATE, action) => {
    // switch(action.type) {
    //     case NEXT_PAGE :
    //         document.getElementById('ip1').value = (action.payload) + 1
    //         return {...state, pageNo : (action.payload) + 1}
    //     case PREV_PAGE :
    //         document.getElementById('ip1').value = (action.payload) - 1
    //         return {...state, pageNo : (action.payload) - 1}
    //     case FIRST_PAGE :
    //         document.getElementById('ip1').value = 1
    //         return {...state, pageNo : 1}
    //     case LAST_PAGE :
    //         document.getElementById('ip1').value = Math.ceil((action.payload.total)/(action.payload.count))
    //         return {...state, pageNo : Math.ceil((action.payload.total)/(action.payload.count))}
    //     case GOTO_PAGE :
    //         document.getElementById('ip1').value = action.payload
    //         return {...state, pageNo : action.payload}
    //     default : return state
    // }
    
    var getAction = {
        [NEXT_PAGE]: function () {
            document.getElementById('ip1').value = (action.payload) + 1
            return { ...state, pageNo: (action.payload) + 1 }
        },
        [PREV_PAGE]: function () {
            document.getElementById('ip1').value = (action.payload) - 1
            return { ...state, pageNo: (action.payload) - 1 }
        },
        [FIRST_PAGE]: function () {
            document.getElementById('ip1').value = 1
            return { ...state, pageNo: 1 }
        },
        [LAST_PAGE]: function () {
            document.getElementById('ip1').value = Math.ceil((action.payload.total) / (action.payload.count))
            return { ...state, pageNo: Math.ceil((action.payload.total) / (action.payload.count)) }
        },
        [GOTO_PAGE]: function () {
            document.getElementById('ip1').value = action.payload
            return { ...state, pageNo: action.payload }
        },
        'defaults': function () {
            return state
        }
        
    }
    console.log(55555, action.type)
    return (getAction[action.type] || getAction['defaults'])()

}