import React, { useReducer } from 'react';

export const AppContext = React.createContext();

const initialState = {
    isLoading:false,
    approvedImages: [],
    rejectedImages: [],
    currentImage: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INITIAL_STATE':
            return {
                ...state,
                ...action.initialState
            }
        case 'FETCH_RANDOM_IMAGE':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_IMAGE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                currentImage: action.data
            }
        case 'IMAGE_APPROVED':
            return {
                ...state,
                currentImage: null,
                approvedImages: [...state.approvedImages, action.data]
            }
        case 'IMAGE_REJECTED':
            return {
                ...state,
                currentImage: null,
                rejectedImages: [...state.approvedImages, action.data]
            }
        case 'default':
            return {
                ...state
            }
    }
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
}