import axios from "axios"
import { DiaryEntry, NewDiaryEntry} from "../types"

const baseUrl = 'http://localhost:3000/api/diaries'

const getAllDiaries = async () => {
    const response = await axios.get<DiaryEntry[]>(baseUrl)
    return response.data
}

const createDiary = async (object: NewDiaryEntry) => {
    try {
        const response = await axios.post<DiaryEntry>(baseUrl, object)
        return response.data
    } catch(error) {
        if (axios.isAxiosError(error)) {
            // console.log(error.response?.data)
            throw new Error(error.response?.data)
        } else {
            // console.log(`This is another error`)
            throw new Error(`Unknown error, not an Axios error!`)
        }
    }
}

export default {
    getAllDiaries, createDiary
}