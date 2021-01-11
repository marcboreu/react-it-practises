import Book from './components/Book.js';

const text="Viatge a la lluna";

export default () => {

    return (
        <div>
            <Book text={text}/>
        </div>
    );
};