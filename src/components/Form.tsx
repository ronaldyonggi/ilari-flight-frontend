import { useState } from "react"
import diaryService from "../services/diaryService"
import { DiaryEntry, Visibility, Weather } from "../types"

interface FormProps {
  diaries: DiaryEntry[];
  setDiaries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}

const Form = (props: FormProps) => {
  const { diaries, setDiaries } = props;

  const [newDate, setNewDate] = useState('')
  const [newVisibility, setNewVisibility] = useState('')
  const [newWeather, setNewWeather] = useState('')
  const [newComment, setNewComment] = useState('')

  const diaryCreation = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newDiary = {
      date: newDate,
      weather: newWeather as Weather,
      visibility: newVisibility as Visibility,
      comment: newComment
    }

    diaryService.createDiary(newDiary)
      .then(data => setDiaries(diaries.concat(data)))

    setNewDate('')
    setNewVisibility('')
    setNewWeather('')
    setNewComment('')

  }

  return (
    <form onSubmit={diaryCreation}>
        <div>
          date<input name="date" value={newDate} onChange={e => setNewDate(e.target.value)} type="date" />
        </div>
        <div>
          visibility 
          <input name="visibility" value={newVisibility} onChange={e => setNewVisibility(e.target.value)} />
        </div>
        <div>
          weather 
          <input name="weather" value={newWeather} onChange={e => setNewWeather(e.target.value)} />
        </div>
        <div>
          comment <textarea name="comment" value={newComment} onChange={e => setNewComment(e.target.value)} cols={33} />
        </div>
        <button type="submit">Add</button>
    </form>
  )
}

export default Form