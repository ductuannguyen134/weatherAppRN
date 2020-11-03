export const load = () => {
    return {
        type: 'LOAD'
    }
}

export const auth = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const changeLocation = (location) => {
    return {
        type: 'CHANGE_LOCATION',
        payload: location
    }
}

export const toCelsius = () => {
    return {
        type: 'TO_CELSIUS',
        payload: "celsius"
    }
}

export const toKevin = () => {
    return {
        type: 'TO_KEVIN',
        payload: "kevin"
    }
}

export const toFahrenheit = () => {
    return {
        type: 'TO_FAHRENHEIT',
        payload: "fahrenheit"
    }
}

