// import API from '../Services'
import ActionType from './globalActionType'


const globalState = {
    count: 1,
    card: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    genre: [],
    movie_list: {
        isFetching:false,
        data:{}
    }
}


const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.PENJUMLAHAN:
            //  console.log(state)
            return {
                ...state,
                count: state.count + 1,
            }

        case ActionType.PENGURANGAN:
            // console.log(state.count)
            if (state.count > 0) {
                return {
                    ...state,
                    count: state.count - 1
                }
            } else {
                return {
                    ...state,
                }
            }
        case ActionType.CHANGE_COUNT:
            return {
                ...state,
                count: action.newValueRedux
            }

        case ActionType.INITIAL_GET_DATA_MOVIE:
            return {
                ...state,
                movie_list:{ 
                    isFetching:true,
                    data:action.newValueRedux
                }
            }
        case ActionType.INITIAL_GET_GENRE_MOVIE:
            return {
                ...state,
                genre: action.newValueRedux,
            }
        case ActionType.GET_MOVIE_BY_NAME:
            return {
                ...state,
                movie_list:{ 
                    isFetching:true,
                    data:action.payload
                }
            }
        default:
            return state;
    }

}


export default rootReducer;