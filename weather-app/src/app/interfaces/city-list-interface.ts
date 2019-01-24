export interface CityDesc extends Array<string> {}

export interface CityDetail {
    city: string;
    state: string;
    country: string;
}

export interface CityList extends Array<CityDetail> {}

export interface CityListRersponse {
    data: CityList;
}
