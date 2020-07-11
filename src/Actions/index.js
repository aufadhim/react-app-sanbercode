const _add = () => ({
    type: 'ADD'
})

const _substract = () => ({
    type: 'SUBSTRACT'
})

export function incrementAsync() {
    return async (dispatch) => {
        // const response = await fetch('http://newsapi.org/v2/everything?q=apple&from=2020-07-02&to=2020-07-02&sortBy=popularity&apiKey=9166bcc7e93b48d09be0f264ac02dfbd');
        // dispatch({
        //     type: 'GET_DATA',
        //     payload: response.json()
        // })

        setTimeout(() => {
            dispatch(_add());
        }, 100)
    }
}

export function decrementAsync() {
    return async (dispatch) => {
        // const response = await fetch('http://newsapi.org/v2/everything?q=apple&from=2020-07-02&to=2020-07-02&sortBy=popularity&apiKey=9166bcc7e93b48d09be0f264ac02dfbd');
        // dispatch({
        //     type: 'GET_DATA',
        //     payload: response.json()
        // })
        
        setTimeout(() => {
            dispatch(_substract());
        }, 100)
    }
}   