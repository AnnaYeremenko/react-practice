import { Form } from "components/Form/Form";
import { Modal } from "components/Modal/Modal";
import { WordList } from "components/WordList/WordList";

export const Home = () => {
    return (
        <div><h1>Home</h1>
        <Modal>
            <Form/>
        </Modal>
        <WordList/>
        </div>
    )
}