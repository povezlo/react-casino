import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

interface IRouletteSpin {
    speed: number;
    rotationInProgress: boolean;
    degreesRotationRoulette: number;
    currentRouletteNumber: number;
}

const initialState: IRouletteSpin = {
    speed: 0,
    rotationInProgress: false,
    degreesRotationRoulette: 0,
    currentRouletteNumber: 0,
}

const rouletteSpinSlice = createSlice({
    name: 'rouletteSpin',
    initialState,
    reducers: {
        setRouletteSpinStartSpeed: (state) => {
            const randomSpeed = 1 + Math.random() * 0.1;
            state.speed = randomSpeed;
            state.rotationInProgress = true;
        },
        setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
            const speed = action.payload;
            if (speed === 0) {
                state.rotationInProgress = false;
                state.speed = 0;
            } else {
                state.speed = state.speed - state.speed / 150;
            }
        }
    }
});

export const {
    setRouletteSpinSpeed,
    setRouletteSpinStartSpeed,
} = rouletteSpinSlice.actions

export const selectRouletteSpinSpeed = (state: RootState) => state.rouletteSpin.speed;
export const selectRouletteSpinRotationInProgress = (state: RootState) => state.rouletteSpin.rotationInProgress;

export default rouletteSpinSlice.reducer;