import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const zohodownloadapi_get_writer_api_v1_documents_id_list = createAsyncThunk(
  "zohodownloadapi_response_get_GetUploadedDocumentDetails/zohodownloadapi_get_writer_api_v1_documents_id_list",
  async payload => {
    const response = await apiService.zohodownloadapi_get_writer_api_v1_documents_id_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zohodownloadapi_response_get_GetUploadedDocumentDetailsSlice = createSlice(
  {
    name: "zohodownloadapi_response_get_GetUploadedDocumentDetails",
    initialState,
    reducers: {},
    extraReducers: {
      [zohodownloadapi_get_writer_api_v1_documents_id_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [zohodownloadapi_get_writer_api_v1_documents_id_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [zohodownloadapi_get_writer_api_v1_documents_id_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  zohodownloadapi_get_writer_api_v1_documents_id_list,
  slice: zohodownloadapi_response_get_GetUploadedDocumentDetailsSlice
}
