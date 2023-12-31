import { useEffect, useState } from "react"
import { DiaryEntry } from "./types"
import diaryService from "./services/diaryService"
import Diary from "./components/Diary"
import Form from "./components/Form"
import Notification from "./components/Notification"

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    diaryService.getAllDiaries()
      .then(data => setDiaries(data))
  }, [])

  return (
    <div>
      <h2>Add New Entry</h2>
      <Notification message={message}/>
      <Form diaries={diaries} setDiaries={setDiaries} setMessage={setMessage} />

      <h2>Diary Entries</h2>
      {diaries.map(d => (
        <Diary key={d.id} diaryEntry={d} />
      ))}
    </div>
  )
}

export default App
