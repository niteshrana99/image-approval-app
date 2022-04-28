import { renderHook, act } from '@testing-library/react-hooks';
import { ContextProvider } from './context';
import { useAppContext } from '../hooks/useAppContext';

describe('App context and various Actions setting the state', () => {
    const initState = {
        isLoading: false,
        approvedImages: [],
        rejectedImages: [],
        currentImage: null
    }

    it('should create app context with init data', () => {
        let wrapper = ({ children }) => <ContextProvider value={{}}>{children}</ContextProvider>
        let { result } = renderHook(() => useAppContext(), { wrapper });
        expect(result.current.appContext.state).toEqual(initState);
    });

    it('should set loading to true when image is fetched from backend', () => {
        let wrapper = ({ children }) => <ContextProvider value={{}}>{children}</ContextProvider>
        let { result } = renderHook(() => useAppContext(), { wrapper });

        act(() => {
            result.current.appContext.dispatch({ type: 'FETCH_RANDOM_IMAGE' })
        });
        expect(result.current.appContext.state).toEqual({
            ...initState,
            isLoading: true,
        });
    });

    it('should set currentImage state to data recieved when Image fetch is successfull', () => {
        let wrapper = ({ children }) => <ContextProvider value={{}}>{children}</ContextProvider>
        let { result } = renderHook(() => useAppContext(), { wrapper });

        act(() => {
            result.current.appContext.dispatch({ type: 'FETCH_IMAGE_SUCCESS' , data: { id: 'testImage', url: 'https://www.test.com'}})
        });
        expect(result.current.appContext.state).toEqual({
            ...initState,
            currentImage: { id: 'testImage', url: 'https://www.test.com'}
        });
    });

    it('should set currentImage state to null and add image to approvedImages list when image is approved', () => {
        let wrapper = ({ children }) => <ContextProvider value={{}}>{children}</ContextProvider>
        let { result } = renderHook(() => useAppContext(), { wrapper });

        act(() => {
            result.current.appContext.dispatch({ type: 'IMAGE_APPROVED' , data: { id: 'testImage', url: 'https://www.test.com'}})
        });
        expect(result.current.appContext.state).toEqual({
            ...initState,
            currentImage: null,
            approvedImages: [{ id: 'testImage', url: 'https://www.test.com'}]
        });
    });

    it('should set currentImage state to null and add image to rejected images list when image is rejected', () => {
        let wrapper = ({ children }) => <ContextProvider value={{}}>{children}</ContextProvider>
        let { result } = renderHook(() => useAppContext(), { wrapper });

        act(() => {
            result.current.appContext.dispatch({ type: 'IMAGE_REJECTED' , data: { id: 'testImage', url: 'https://www.test.com'}})
        });
        expect(result.current.appContext.state).toEqual({
            ...initState,
            currentImage: null,
            rejectedImages: [{ id: 'testImage', url: 'https://www.test.com'}]
        });
    });
})