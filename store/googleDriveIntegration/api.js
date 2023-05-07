import axios from "axios"
import { GOOGLE_DRIVE_API_TOKEN } from "react-native-dotenv"
const googleDriveIntegration = axios.create({
  baseURL: "https://www.googleapis.com/drive/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${GOOGLE_DRIVE_API_TOKEN}`
  }
})
function googledriveintegration_get_files_read(payload) {
  return googleDriveIntegration.get(`/files`)
}
function googledriveintegration_post_files_create(payload) {
  return googleDriveIntegration.post(`/files`, {
    params: { uploadType: payload.uploadType }
  })
}
function googledriveintegration_get_changes_read(payload) {
  return googleDriveIntegration.get(`/changes`, {
    params: { pageToken: payload.pageToken }
  })
}
export const apiService = {
  googledriveintegration_get_files_read,
  googledriveintegration_post_files_create,
  googledriveintegration_get_changes_read
}
