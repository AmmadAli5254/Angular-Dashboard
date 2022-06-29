import { createAction, props } from '@ngrx/store'
import { Post } from '../interface/post'
import { Posts } from '../interface/posts'

export const postLoaded = createAction(
    '[Post API] Post Loaded Sucess',
    props<{posts: Posts[]}>()
)

export const postCreated = createAction(
    '[Post API] Post Created',
    props<{post: Post}>()
)