export const addBoard = (payload) => {
    const { id, title, cover } = payload
    return {   
        id,
        title,
        cover,
        lists: []
    }
}