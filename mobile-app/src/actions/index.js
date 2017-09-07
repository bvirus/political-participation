
export const LIKE       = like;
export const DISLIKE    = dislike;

export function dislike(id) {
    return {
        type: DISLIKE,
        id: id
    }
}

export function like(card) {
    return {
        type: LIKE,
        id: id
    }
}

