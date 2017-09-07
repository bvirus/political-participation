import { List, Map, fromJS } from 'immutable';
import { LIKE, DISLIKE } from '../actions';

export function reducer(state = fromJS({ cards: {}, currentCard: null }), action) {
    switch (action.type) {
        case LIKE: {
            let card = state.cards.get(action.id);
            return state.set('cards', state.cards.set(action.id, card.set('liked', true)));
        }
        case DISLIKE: {
            let card = state.cards.get(action.id);
            return state.set('cards', state.cards.set(action.id, card.set('liked', false)));
        }
        default:
            return state;
    }
}