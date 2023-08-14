import { type CommentWithId } from '../../types.d';

interface Props {
    comments?: CommentWithId[]
}

export function CommentsList({ comments }: Props) {
    return (
        <ul>
            <li className='grid gap-2'>
                {comments?.map(comment => 
                    <article 
                        key={comment.id}
                        className={`${comment.preview === true ? 'bg-gray-400' : 'bg-white'} block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100`}
                    >
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                            {comment.title}
                        </h5>
                        <p className='font-normal text-gray-700'>
                            {comment.message}
                        </p>
                    </article>
                )}
            </li>
        </ul>
    );
}
