import type { Comment, CommentWithId } from "../types.d";

const initialComments: CommentWithId[] = [
    { id: crypto.randomUUID(), title: 'React', message: 'Librería para UI', preview: false },
    { id: crypto.randomUUID(), title: 'TypeScript', message: 'Superset de JavaScript para tipar código', preview: false },
    { id: crypto.randomUUID(), title: 'React Query', message: 'Para gestionar estados asíncronos', preview: false },
];

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));

export async function getComments() {
    await delay(3000);
    const localStorageComments = localStorage.getItem('comments');
    const comments: CommentWithId[] = localStorageComments == null ? initialComments : JSON.parse(localStorageComments);
    return comments;
}

export async function postComment(comment: Comment) {
    const comments: CommentWithId[] = await getComments();
    const newComment: CommentWithId = { id: crypto.randomUUID(), ...comment, preview: false };
    const newComments = [...comments, newComment];
    localStorage.setItem('comments', JSON.stringify(newComments));
    return newComment;
}
