import { v4 } from 'uuid'

export const createNote = (title, content) => {
    return {
        id: v4(),
        title : title, 
        content: content,
        date: new Date().toDateString(),
        hour: new Date().getHours
    }
}