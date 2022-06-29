import { createReducer, on, createSelector } from '@ngrx/store';
import * as PostPageAction from 'src/app/poststate/postpage.action';
import * as PostAPIAction from 'src/app/poststate/postapi.action';
import { Post } from '../interface/post';
import { Posts } from '../interface/posts';


const createPost = (posts: Posts[], post: any) => [...posts, post];



export interface State {
    posts: Posts[];
    post: Post | null

}

export interface AppState {
    post: State
}

export const initialState: State = {
    posts: [],
    post: null
}

export const reducer = createReducer(
    initialState,
    on(PostPageAction.enter, (state) => {
        return {
            ...state
        }
    }),
    on(PostPageAction.createPost, (state, action) => {
        return {
            ...state,
            post: action.post
        }
    }),
    on(PostAPIAction.postLoaded, (state, action) => {
        return {
            posts: action.posts,
            post: state.post
        }
    }),
    on(PostAPIAction.postCreated, (state, action) => {
        return {
            posts: createPost(state.posts, action.post),
            post: null
        }
    })
)


export const selectAppState = (state: AppState) => state.post

export const selectAllPosts = (state: State) => state.posts

export const selectAllPostsSelectore = createSelector(
    selectAppState,
    (state) =>  selectAllPosts(state)
)







