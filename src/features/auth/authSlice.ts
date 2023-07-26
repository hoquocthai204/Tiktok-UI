// src/features/auth/authSlice.ts
import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setIsLoggedIn } = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
