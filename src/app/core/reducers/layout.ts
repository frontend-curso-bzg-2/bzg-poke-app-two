import { LayoutActionTypes, LayoutActions } from "../actions/layout";

export interface State {
    showSideNav: string;
};

export const initialState: State = {
    showSideNav: 'close'
};

export function reducer(state: State = initialState, action: LayoutActions): State {

    switch (action.type) {
        case LayoutActionTypes.OpenSideNav:
            return {
                ...state,
                showSideNav: 'open'
            };

        case LayoutActionTypes.CloseSideNav:
            return {
                ...state,
                showSideNav: 'close'
            };

        default: 
            return state;

    }
}

export const getShowSideNav = (state : State) => state.showSideNav;