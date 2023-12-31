import { useState } from "react"
import diaryService from "../services/diaryService"
import { DiaryEntry, Visibility, Weather } from "../types"
import VisibilityRadio from "./VisibilityRadio";

interface FormProps {
  diaries: DiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Form = (props: FormProps) => {
  const { diaries, setDiaries, setMessage } = props;

  const [newDate, setNewDate] = useState('')
  const [newVisibility, setNewVisibility] = useState<Visibility>(Visibility.Great)
  const [newWeather, setNewWeather] = useState('')
  const [newComment, setNewComment] = useState('')

  const diaryCreation = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newDiary = {
      date: newDate,
      weather: newWeather as Weather,
      visibility: newVisibility as Visibility,
      comment: newComment
    }

    // diaryService.createDiary(newDiary)
    //   .then(data => setDiaries(diaries.concat(data)))

    try {
      const createdDiary = await diaryService.createDiary(newDiary)
      if (createdDiary) {
        setDiaries(diaries.concat(createdDiary))
      }
    } catch(error: unknown) {
      if (error instanceof Error) {
        const errorMessage = '' + error
        setMessage(errorMessage)
        setTimeout(() => {
          setMessage('')
        }, 6000);
      }
    }


    setNewDate('')
    setNewComment('')
  }

  return (
    <form onSubmit={diaryCreation}>
        <div>
          date<input name="date" value={newDate} onChange={e => setNewDate(e.target.value)} type="date" />
        </div>
        <VisibilityRadio setNewVisibility={setNewVisibility} />
        <div>
          comment <textarea name="comment" value={newComment} onChange={e => setNewComment(e.target.value)} cols={33} />
        </div>
        <button type="submit">Add</button>
    </form>
  )
}

export default Form