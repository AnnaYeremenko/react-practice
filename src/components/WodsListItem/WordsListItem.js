import { CheckBox } from "@mui/icons-material";
import { deleteWord } from "components/redux/wordsSlice";
import { useDispatch } from "react-redux";

export const WordsListItem = ({engWord, ukrWord, checked, number, id}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
    dispatch(deleteWord(id));

    }
    return (
        <li>
            <CheckBox color="secondary" checked={checked} />
            <span>{number}</span>
            <span>{ukrWord}</span>
            <span>{engWord}</span>
            <button type="button">Edit</button>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}