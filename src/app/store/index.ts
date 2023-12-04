import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../../entities/user/api/userApi'
import userSlice from '../../entities/user/slices/userSlices'
import rouletteSlice from '../../games/roulette/slices/rouletteSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    roulette: rouletteSlice,
    [userApi.reducerPath]: userApi.reducer,
    // wallet: walletSlice,
    // rouletteSpin: rouletteSpinSlice,
    // slot: slotSlice,
    // hummerCoreSlice: hummerCoreSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch