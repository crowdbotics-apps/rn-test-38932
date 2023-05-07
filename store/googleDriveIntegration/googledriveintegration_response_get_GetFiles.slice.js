import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const googledriveintegration_get_files_read = createAsyncThunk(
  "googledriveintegration_response_get_GetFiles/googledriveintegration_get_files_read",
  async payload => {
    const response = await apiService.googledriveintegration_get_files_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const googledriveintegration_response_get_GetFilesSlice = createSlice({
  name: "googledriveintegration_response_get_GetFiles",
  initialState,
  reducers: {},
  extraReducers: {
    [googledriveintegration_get_files_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [googledriveintegration_get_files_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [googledriveintegration_get_files_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  googledriveintegration_get_files_read,
  slice: googledriveintegration_response_get_GetFilesSlice
}
