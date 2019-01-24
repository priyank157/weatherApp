import { cityListActionTypes, InitCitySearchRetrieve, SuccessCitySearchRetrieve } from './citylist.actions';
import { CityListState, CitiesState } from '../../interfaces/store.interface';

export const initiaState: CityListState = {
    isLoading: false,
    cities: []
};

export function cityListReducer(state = initiaState, action: SuccessCitySearchRetrieve | InitCitySearchRetrieve) {
    switch (action.type) {
        case cityListActionTypes.INIT_CITY_SEARCH_RETIREVE:
            return {
                ...state,
                isLoading: true
            };
        case cityListActionTypes.SUCCESS_CITY_SEARCH_RETRIEVE:
            return {
                ...state,
                isLoading: false,
                cities: action.payload
            };
        default:
            return state;
    }
}


export const getLoadingStatus = (state: CityListState): boolean => state.isLoading;
export const getCities = (state: CityListState): CitiesState => state.cities;
