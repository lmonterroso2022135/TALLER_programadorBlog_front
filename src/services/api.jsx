import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/opinionManager/v1',
    timeout: 5000
})

export const getPublications = async () => {
    try {
        return await apiClient.get('/publications')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getComments = async (publicationId) => {
    try {
        return await apiClient.get(`/publications/${publicationId}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const postPublication = async (form) => {
    try {
        return await apiClient.post(`/publications`, { ...form })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const postComment = async (form, publicationId) => {
    try {
        return await apiClient.post(`/comments/${publicationId}`, { ...form })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}