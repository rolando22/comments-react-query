import type { Comment, CommentWithId } from "../types.d";

const initialComments: CommentWithId[] = [
    { id: crypto.randomUUID(), title: 'React', message: 'Librería para UI', preview: false },
    { id: crypto.randomUUID(), title: 'TypeScrip', message: 'Superset de JavaScript para tipar código', preview: false },
    { id: crypto.randomUUID(), title: 'React Query', message: 'Para gestionar estados asíncronos', preview: false },
];

export function getComments() {
    const localStorageComments = localStorage.getItem('comments');
    const comments: CommentWithId[] = localStorageComments == null ? initialComments : JSON.parse(localStorageComments);
    return comments;
}

export function postComment(comment: Comment) {
    const comments: CommentWithId[] = getComments();
    const newComment = { id: crypto.randomUUID(), ...comment };
    const newComments = [...comments, newComment];
    localStorage.setItem('comments', JSON.stringify(newComments));
    return newComment;
}
