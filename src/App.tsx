import { CommentsList, FormInput, FormTextArea } from './components';
import { useComments } from './hooks/useComments';
import './App.css';

export function App() {
    const { comments, saveComment, isLoading, isError } = useComments();

    const handlerOnSubmitSaveComment = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const title = data.get('title')?.toString() ?? '';
        const message = data.get('message')?.toString() ?? '';
        if (title != '' && message != '') saveComment({ title, message });
    };

    return (
        <main className='grid h-screen grid-cols-2'>
            <section className='col-span-1 p-8 bg-white'>
                {isLoading && <p>Cargando...</p>}
                {isError && <p>Ha ocurrido un error</p>}
                <CommentsList comments={comments} />
            </section>
            <section className='col-span-1 p-8 bg-black'>
                <form 
                    className='block max-w-xl px-4 m-auto'
                    onSubmit={handlerOnSubmitSaveComment}
                >
                    <FormInput />
                    <FormTextArea />
                    <button className='mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2'>
                        Enviar comentario
                    </button>
                </form>
            </section>
        </main>
    );
}
