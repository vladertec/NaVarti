import axios from "axios"

export const getGalleryCards = async () => {
  try {
    const { data } = await axios.get(`/api/galleries`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewGalleryCard = async (gallery) => {
  try {
    const { data } = await axios.post("/api/gallery", gallery)
    return data
  } catch (err) {
    return err
  }
}

export const updateGalleryCard = async (gallery, id) => {
  try {
    const { data } = await axios.put(`/api/gallery/${id}`, gallery)
    return data
  } catch (err) {
    return err
  }
}

export const deleteGalleryCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/gallery/${id}`)
    return data
  } catch (err) {
    return err
  }
}
