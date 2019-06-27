import { Action } from '@ngrx/store';
import { Customer } from '../customer.model';
import { type } from 'os';
export enum CustomerActionTypes {
    LOAD_CUSTOMERS = '[Customer] Load customer',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] Load customer success',
    LOAD_CUSTOMERS_FAIL = '[Customer] Load customer fail',
}

export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSucess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: Customer[]) {
    }
}
export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;
    constructor(public payload: string) {
    }
}

export type Action = LoadCustomers | LoadCustomersSucess | LoadCustomersFail;