import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { UserauthService } from '../services/userauth.service';
import { postCreated, postLoaded } from './postapi.action';
import * as PostPageAction from './postpage.action';
import * as PostAPIAction from './postapi.action';



@Injectable()
export class PostApiEffectsService {

  constructor(private userService: UserauthService, private action: Actions, private route: ActivatedRoute, private router: Router) { }

  loadPosts = createEffect(() => {
    return this.action.pipe(
      ofType(PostPageAction.enter),
      exhaustMap(() => {
        return this.userService.getAllPosts().pipe(map((data: any) => PostAPIAction.postLoaded({ posts: data.data })))
      })
    )
  })

  createPost = createEffect(() => {
    return this.action.pipe(
      ofType(PostPageAction.createPost),
      concatMap((actions) => {
        return this.userService.createPost(actions.post).pipe((
          map((post: any) => {
            alert('Post has been created sucessfully');
            this.router.navigate(['../main/customer'], {
              relativeTo: this.route
            })
            return PostAPIAction.postCreated({ post: post })
          }
          )
        ));
      })
    );
  })
}

