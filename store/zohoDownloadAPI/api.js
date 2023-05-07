import axios from "axios"
import { ZOHO_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const zohoDownloadAPI = axios.create({
  baseURL: "https://zohoapis.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${ZOHO_API_INTEGRATION_TOKEN}`
  }
})
function zohodownloadapi_post_oauth_v2_token_create(payload) {
  return zohoDownloadAPI.post(`/oauth/v2/token`)
}
function zohodownloadapi_post_writer_api_v1_documents_create(payload) {
  return zohoDownloadAPI.post(`/writer/api/v1/documents`)
}
function zohodownloadapi_get_writer_api_v1_documents_id_list(payload) {
  return zohoDownloadAPI.get(`/writer/api/v1/documents/id`)
}
export const apiService = {
  zohodownloadapi_post_oauth_v2_token_create,
  zohodownloadapi_post_writer_api_v1_documents_create,
  zohodownloadapi_get_writer_api_v1_documents_id_list
}
