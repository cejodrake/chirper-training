import thunk from  'redux-thunk'

import logger from './logger'

import {applyMiddleware} from 'redux'

export function test(){
    return null;
}

export  default applyMiddleware(
    thunk,
    logger
)