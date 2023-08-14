import { useState } from "react";
import { getComments, postComment } from "../services/comments";
import type { Comment } from "../types.d";

export function useComments() {
    const [comments, setComments] = useState(getComments());
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const saveComment = (comment: Comment) => {
        try {
            setIsLoading(true);
            setIsError(false);
            const newComment = postComment(comment);
            const newComments = [...comments, newComment];
            setComments(newComments);
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        comments,
        saveComment, 
        isLoading, 
        isError, 
    };
}
