import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const zohodownloadapi_post_writer_api_v1_documents_create = createAsyncThunk(
  "zohodownloadapi_response_post_CreateUploadDocuments/zohodownloadapi_post_writer_api_v1_documents_create",
  async payload => {
    const response = await apiService.zohodownloadapi_post_writer_api_v1_documents_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zohodownloadapi_response_post_CreateUploadDocumentsSlice = createSlice({
  name: "zohodownloadapi_response_post_CreateUploadDocuments",
  initialState,
  reducers: {},
  extraReducers: {
    [zohodownloadapi_post_writer_api_v1_documents_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [zohodownloadapi_post_writer_api_v1_documents_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [zohodownloadapi_post_writer_api_v1_documents_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  zohodownloadapi_post_writer_api_v1_documents_create,
  slice: zohodownloadapi_response_post_CreateUploadDocumentsSlice
}
