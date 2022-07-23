import {
    POSTS_ERROR,
    POSTS_PENDING,
    POSTS_RESOLVED
} from '../constants';

const initialValue = {
    posts: [],
    isLoading: false,
    status: true
};

export const postsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case POSTS_PENDING: {
            return {
                ...state,
                isLoading: true,
                status: true
            };
        }
        case POSTS_RESOLVED: {
            return {
                posts: action.data,
                isLoading: false,
                status: false
            };
        }
        case POSTS_ERROR: {
            return {
                ...state,
                isLoading: false,
                status: true
            };
        }

        default: {
            return state;
        }
    }
}
