import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = `https://dummyjson.com/posts/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ResponseModel>(`${this.baseUrl}?limit=4`);
  }
}
