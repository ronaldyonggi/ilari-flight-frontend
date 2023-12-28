import { DiaryEntry } from "../types";

interface DiaryProps {
    diaryEntry: DiaryEntry;
}

const Diary = (props: DiaryProps): JSX.Element => {
    const { diaryEntry } = props;
    const { date, weather, visibility, comment } = diaryEntry;

    return (
        <div>
            <p>
                <b>{date}</b>
                <br/>
                visibility: {visibility}
                <br/>
                weather: {weather}
                <br />
                comment: {comment}
            </p>
        </div>
    )
}

export default Diary;