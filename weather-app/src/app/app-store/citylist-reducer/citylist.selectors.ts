import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getLoadingStatus, getCities } from './citylist.reducer';
import { CityListState } from '../../interfaces/store.interface';

export const getCityListState = createFeatureSelector<CityListState>('cityList');

export const getCitiesFromState = createSelector(
    getCityListState,
    getCities
);

export const isLoadingList = createSelector(
    getCityListState,
    getLoadingStatus
);
