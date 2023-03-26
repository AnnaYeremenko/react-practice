import { CheckBox } from "@mui/icons-material";

export const WordsListItem = () => {
    return (
        <li>
            <CheckBox color="secondary" checked={false} />
            <span>1</span>
            <span>Ukr word</span>
            <span>Eng wodr</span>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </li>
    )
}