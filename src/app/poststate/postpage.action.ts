import { createAction, props } from '@ngrx/store'
import { Post } from '../interface/post'


export const enter = createAction(
    '[Post Page] Enter'
)

export const createPost = createAction(
    '[Post Page] Create Post',
    props<{post: Post}>()
)