import './App.css';
import { FormInput, FormTextArea } from './components';

export function App() {
    return (
        <main className='grid h-screen grid-cols-2'>
            <section className='col-span-1 p-8 bg-white'></section>
            <section className='col-span-1 p-8 bg-black'>
                <form className='block max-w-xl px-4 m-auto'>
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
