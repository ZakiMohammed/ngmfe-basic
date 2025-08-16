import { Component, inject, OnInit, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  post = signal<Post | null>(null);

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      const id = +params['id'];
      this.postService
        .getById(id)
        .pipe(tap((post) => this.post.set(post)))
        .subscribe();
    });
  }

  goToList() {
    this.router.navigate(['/posts']);
  }
}
