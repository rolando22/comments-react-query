import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments, postComment } from "../services/comments";
import type { Comment, CommentWithId } from "../types.d";

export function useComments() {
    const { data, isLoading, isError } = useQuery(
        ['comments'],
        getComments,
    );

    const queryClient = useQueryClient();
    
    const { mutate, isLoading: isLoadingMutation } = useMutation({
        mutationFn: postComment, 
        onMutate: async (newComment: Comment) => {
            await queryClient.cancelQueries(['comments']);
            const prevComments = queryClient.getQueryData(['comments']);
            queryClient.setQueryData(['comments'], (oldData?: CommentWithId[]): CommentWithId[] => {
                const newCommentToAdd = { id: crypto.randomUUID(), ...newComment };
                if (oldData == null) return [newCommentToAdd];
                return [...oldData, newCommentToAdd];
            });

            return { prevComments };
        },
        onError: async (error, _, context) => {
            console.log(error);
            if (context?.prevComments != null) 
                queryClient.setQueryData(['comments'], context.prevComments);
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: ['comments'] });
        },
    });

    const saveComment = (comment: Comment) => {
        mutate(comment);
    };

    return {
        comments: data,
        saveComment, 
        isLoading, 
        isError, 
        isLoadingMutation, 
    };
}
