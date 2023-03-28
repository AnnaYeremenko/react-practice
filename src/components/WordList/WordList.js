import { WordsListItem } from "components/WodsListItem/WordsListItem";
import { useSelector } from "react-redux";

export const WordList = () => {
    const words = useSelector(state => state.words)
    return (
        <div>
            <ul>{words.map((word, index) => <WordsListItem {...word} key={word.id} number={index + 1}/>)}
                
            </ul>
        </div>
    )
};