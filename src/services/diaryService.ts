import axios from "axios"
import { DiaryEntry, NewDiaryEntry} from "../types"

const baseUrl = 'http://localhost:3000/api/diaries'

const getAllDiaries = async () => {
    const response = await axios.get<DiaryEntry[]>(baseUrl)
    return response.data
}

const createDiary = (object: NewDiaryEntry) => {
    return axios
        .post<DiaryEntry>(baseUrl, object)
        .then(res => res.data)
}

export default {
    getAllDiaries, createDiary
}