import React from 'react';
import { AppContext } from '../Context/context';
import { fetchRandomImageData } from '../utils/fetchRandomImage';

export const useAppContext = () => {
    const appContext = React.useContext(AppContext);
    if(!appContext) {
        throw new Error("UseAppContext must be defined within ContextProvider")
    }

    async function fetchRandomImage(dispatch) {
        dispatch({type: "FETCH_RANDOM_IMAGE"});
        try {
            let imageData = await fetchRandomImageData();
            imageData = await imageData.json();
            dispatch({type: "FETCH_IMAGE_SUCCESS", data:{id: imageData.id, url: imageData.urls.small}});
        } catch(error) {
            console.log(error);
            dispatch({type: "FETCH_IMAGE_FAIL", data:error});
        }
    }

    return { appContext, fetchRandomImage }
}