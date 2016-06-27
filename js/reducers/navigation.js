/**
* @flow
 */

'use strict';

import type {Action} from '../actions/types';

export type Tab = 'map' | 'news' | 'notifications' | 'info';


type State = {
  tab: Tab;
};

const initialState: State = { tab: 'map'};

function navigation(state: State = initialState, action: Action): State {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = navigation;
