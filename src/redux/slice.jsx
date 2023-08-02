import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUserData } from './operations';

const initialState = {
    users: [],
    following: [],
    filter: '',
    isLoading: false,
    totalTweets: 0,
};

const handlePanding = (state) => {
    state.isLoading = true;
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filterContact: (state, action) => {
        state.filter = action.payload;
        },
        reset: (state) => {
            state.users = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, handlePanding)
            .addCase(updateUserData.pending, handlePanding)
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users.push(...action.payload);
                state.totalTweets = action.payload.length;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                const { id, followers } = action.meta.arg.updatedData;
                const userIndex = state.users.findIndex((user) => user.id === id);

                if (userIndex !== -1) {
                state.users[userIndex] = action.payload;
                } else {
                state.users.push(action.payload);
                }

                const followingIndex = state.following.findIndex((user) => user.id === id);

                if (followingIndex !== -1) {
                    if (followers < state.following[followingIndex].followers) {
                        state.following.splice(followingIndex, 1);
                    } else {
                        state.following[followingIndex].followers = followers;
                    }
                } else {
                    state.following.push(action.payload);
                }
            });
    },
});

export const { filterContact } = userSlice.actions;

export const userReducer = userSlice.reducer;
