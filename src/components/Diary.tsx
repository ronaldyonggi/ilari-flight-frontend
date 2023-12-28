import { DiaryEntry } from "../types";

interface DiaryProps {
    diaryEntry: DiaryEntry;
}

const Diary = (props: DiaryProps): JSX.Element => {
    const { diaryEntry } = props;
    const { date, weather, visibility } = diaryEntry;

    return (
        <div>
            <p>
                <b>{date}</b>
                <br/>
                visibility: {visibility}
                <br/>
                weather: {weather}
            </p>
        </div>
    )
}

export default Diary;