import * as CustomerActions from './customer.actions';
import { Customer } from '../customer.model';
import * as fromRoot from '../../state/app-state';
import { State } from '@ngrx/store';

export interface CustomerState {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    customer: CustomerState;
}
export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ''
};

export function customerReducer(state = initialState, actions: CustomerActions.Action): CustomerState {
    switch (actions.type) {
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            };
        }
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                customers: actions.payload
            };
        }
        case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                customers: [],
                loading: false,
                loaded: false,
                error: actions.payload
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
