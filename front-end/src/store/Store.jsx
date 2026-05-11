import { configureStore } from "@reduxjs/toolkit";
import CoursSliceReducer from '../slices/CourSlice'
import FiliereSliceReducer from '../slices/FiliereSlice'
import BlogsSliceReducer from '../slices/BlogsSlice'

export const Store = configureStore ({
    reducer:{
        courses : CoursSliceReducer,
        filieres: FiliereSliceReducer,
        blogs: BlogsSliceReducer,
    },
})