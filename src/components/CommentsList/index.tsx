export function CommentsList() {
    return (
        <ul>
            <li>
                {[1, 2, 3].map((comment, index) => 
                    <article 
                        key={index}
                        className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'
                    >
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                            {comment}
                        </h5>
                        <p className='font-normal text-gray-700'>
                            {comment}
                        </p>
                    </article>
                )}
            </li>
        </ul>
    );
}
