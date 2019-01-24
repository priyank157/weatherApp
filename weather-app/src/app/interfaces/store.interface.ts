import { CityDetail } from './city-list-interface';

export interface CitiesState extends Array<String> {}

export interface CityListState {
    isLoading: boolean;
    cities: CitiesState;
}
