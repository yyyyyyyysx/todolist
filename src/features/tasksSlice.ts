import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: new Map()
  },
  reducers: {
    remove: (state, action: PayloadAction<{date: Date, id: string}>)  => {

    },
    add: (state, action: PayloadAction) => {

    }
  }
});

export const { remove, add } = taskSlice.actions;