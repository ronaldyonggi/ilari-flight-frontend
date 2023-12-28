import { useEffect, useState } from "react"
import { DiaryEntry } from "./types"
import diaryService from "./services/diaryService"
import Diary from "./components/Diary"
import Form from "./components/Form"

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([])

  useEffect(() => {
    getAllDiaries()
      .then(data => setDiaries(data))
  }, [])

  return (
    <div>
      <h2>Add New Entry</h2>
      <Form diaries={diaries} setDiaries={setDiaries} />

      <h2>Diary Entries</h2>
      {diaries.map(d => (
        <Diary key={d.id} diaryEntry={d} />
      ))}
    </div>
  )
}

export default App
