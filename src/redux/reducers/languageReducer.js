import { uz } from '../../const/uz'
import { en } from '../../const/en'
import { ru } from '../../const/ru'

const initial = en;

export const languageReducer = (state = initial, action) =>{
    switch(action.type){
        case 'en':
            return en;
        case 'uz':
            return uz;
        case 'ru':
            return ru;
        default:
            return state;
    }
}