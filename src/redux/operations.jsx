import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi, updateUserApi } from '../services/API';

export const fetchUsers = createAsyncThunk(
    'users/getUser',
    async (page, thunkAPI) => {
        try {
            const response = await getUsersApi(page);
            const serializedData = response.data.map(user => ({
                user: user.user,
                tweets: user.tweets,
                followers: user.followers,
                avatar: user.avatar,
                id: user.id
            }));
            return serializedData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const updateUserData = createAsyncThunk(
    'user/updateUserData',
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
            const user = await updateUserApi(id, updatedData);
            const serializedData = {
                user: user.data.user,
                tweets: user.data.tweets,
                followers: user.data.followers,
                avatar: user.data.avatar,
                id: user.data.id,
            };
            return serializedData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

