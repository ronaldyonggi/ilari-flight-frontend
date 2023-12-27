import { useEffect, useState } from "react"
import { NonSensitiveDiaryEntry } from "./types"
import { getAllDiaries } from "./services/diaryService"
import Diary from "./components/Diary"

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])

  useEffect(() => {
    getAllDiaries()
      .then(data => setDiaries(data))
  }, [])

  return (
    <div>
      <h2>Diary Entries</h2>
      {diaries.map(d => (
        <Diary key={d.id} diaryEntry={d} />
      ))}
    </div>
  )
}

export default App
