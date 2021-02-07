export const FETCH_HOUSES = 'FETCH_HOUSES'
export const CREATE_HOUSES = 'CREATE_HOUSES'

export const fetchHouses = () => {
    return async dispatch => {

        // logic to fetch houses from API
        const result = await fetch('http://10.0.0.177:3000/api/houses')

        // conv to JSON
        const resultData = await result.json()

        // console.log(resultData)

        dispatch({
            type: FETCH_HOUSES,
            payload: resultData
        })
    }
}