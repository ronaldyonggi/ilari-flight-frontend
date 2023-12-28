import axios from "axios"
import { NonSensitiveDiaryEntry } from "../types"

const baseUrl = 'http://localhost:3000/api/diaries'

const getAllDiaries = () => {
    return axios
        .get<DiaryEntry[]>(baseUrl)
        .then(res => res.data)
}

    return axios
        .get<NonSensitiveDiaryEntry[]>(baseUrl)
        .then(res => res.data)
}