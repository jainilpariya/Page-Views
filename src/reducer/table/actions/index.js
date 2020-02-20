import {
    NEXT_PAGE,
    PREV_PAGE,
    FIRST_PAGE,
    LAST_PAGE,
    GOTO_PAGE
} from './types'

export const firstPage = () => {
    return {
        type : FIRST_PAGE
    }
}

export const lastPage = (total, count) => {
    return {
        type : LAST_PAGE,
        payload : {total, count}
    }
}

export const nextPage = (pageNo) => {
    return {
        type : NEXT_PAGE,
        payload : pageNo
    }
}

export const prevPage = (pageNo) => {
    return {
        type : PREV_PAGE,
        payload : pageNo
    }
}

export const goToPage = (pageNo) => {
    return {
        type : GOTO_PAGE,
        payload : pageNo
    }
}