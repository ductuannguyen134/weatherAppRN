const initialState = {
  location: {
    coord: { lon: 151.21, lat: -33.87 },
    weather: [
      { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
    ],
    base: "stations",
    main: {
      temp: 293.34,
      feels_like: 288.82,
      temp_min: 292.04,
      temp_max: 294.26,
      pressure: 1022,
      humidity: 49,
    },
    visibility: 10000,
    wind: { speed: 6.2, deg: 60 },
    clouds: { all: 20 },
    dt: 1604383094,
    sys: {
      type: 1,
      id: 9600,
      country: "AU",
      sunrise: 1604343169,
      sunset: 1604391873,
    },
    timezone: 39600,
    id: 2147714,
    name: "Sydney",
    cod: 200,
  },
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
