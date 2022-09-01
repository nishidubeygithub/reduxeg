import {configureStore} from '@reduxjs/toolkit'
import reducer from '../reducer/reducer'

const store = configureStore({
    reducer:{
        add: reducer,
        
    }
})
export default store