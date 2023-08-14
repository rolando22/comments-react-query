export function FormInput () {
    return (
        <div className='mb-6'>
            <label 
                htmlFor='title'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                Introduce título
            </label>
            <input 
                type='text' 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5'
                name='title'
                id='title'
                placeholder='Escribe un título...'
            />
        </div>
    );
}

export function FormTextArea() {
    return (
        <textarea 
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            name='message' 
            id='message' 
            rows={4}
            placeholder='Escribe un comentario...'
        />
    );
}
