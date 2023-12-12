import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../../entities/user/api/userApi'
import userSlice from '../../entities/user/slices/userSlices'
import rouletteSlice from '../../games/roulette/slices/rouletteSlice'
import walletSlice from '../../entities/wallet/slices/walletSlices'
import slotSlice from '../../games/slots/slices/SlotSlice'
import rouletteSpinSlice from '../../games/roulette/slices/rouletteSpinSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    wallet: walletSlice,
    roulette: rouletteSlice,
    rouletteSpin: rouletteSpinSlice,
    slot: slotSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch