import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Hao",
    "lastName": "Jin",
    "handle": "hao",
    "avatar": "avatar.jpg",
    "banner": "starship.jpeg",
    "bio": "Computer Science, Graduate student of Northeastern University",
    "website": 'www.google.com',
    "location": "Boston, MA",
    "dateOfBirth": "1996-05-04",
    "dateJoined": "2022-01",
    "followingCount": 568,
    "followersCount": 5196
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        changeProfile(state, action) {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.handle = action.payload.handle
            state.bio = action.payload.bio
            state.website = action.payload.website
            state.location = action.payload.location
            state.dateOfBirth = action.payload.dateOfBirth
        }
    }
});

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;