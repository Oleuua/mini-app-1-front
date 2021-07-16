import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    showedModal: null
  },
  reducers: {
    setShowedModal: (state, action) => {
      state.showedModal = action.payload
    }
  },
})

export const { setShowedModal } = modalSlice.actions

export default modalSlice.reducer