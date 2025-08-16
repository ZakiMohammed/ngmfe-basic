import { Component, inject, OnInit, signal } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { tap } from 'rxjs';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  router = inject(Router);
  postService = inject(PostService);
  posts = signal<Post[]>([]);

  ngOnInit() {
    this.postService
      .getAll()
      .pipe(tap((response) => this.posts.set(response.posts)))
      .subscribe();
  }

  goToDetails(id: number) {
    this.router.navigate(['posts', id]);
  }
}
