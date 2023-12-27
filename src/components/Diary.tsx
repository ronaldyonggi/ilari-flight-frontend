import { NonSensitiveDiaryEntry } from "../types";

interface DiaryProps {
    diaryEntry: NonSensitiveDiaryEntry;
}

const Diary = (props: DiaryProps): JSX.Element => {
    const { diaryEntry } = props;
    const { date, weather, visibility } = diaryEntry;

    return (
        <div>
            <b>{date}</b>
            <p>visibility: {visibility}</p>
            <p>weather: {weather}</p>
        </div>
    )
}

export default Diary;