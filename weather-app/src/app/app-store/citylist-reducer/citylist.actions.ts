import { Action } from '@ngrx/store';
import { CitiesState } from '../../interfaces/store.interface';

export enum cityListActionTypes {
    INIT_CITY_SEARCH_RETIREVE = 'INIT_CITY_SEARCH_RETIREVE',
    SUCCESS_CITY_SEARCH_RETRIEVE = 'SUCCESS_CITY_SEARCH_RETRIEVE'
}

export class InitCitySearchRetrieve implements Action {
    readonly type = cityListActionTypes.INIT_CITY_SEARCH_RETIREVE;
}

export class SuccessCitySearchRetrieve implements Action {
    readonly type = cityListActionTypes.SUCCESS_CITY_SEARCH_RETRIEVE;

    constructor(public payload: CitiesState) {
    }
}
