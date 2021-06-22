import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {Tobacco} from "./tobacco";
import {Shisha} from "./shisha";

@Injectable()

export class SmokebaseService {

  private api = 'https://api.s1810456030.student.kwmhgb.at/wp-json/acf/v3';
  private apiV2 = 'https://api.s1810456030.student.kwmhgb.at/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getAllTobaccos(perPage: number): Observable<Tobacco[]> {
    return this.http.get<Tobacco[]>(`${this.api}/tobaccos?per_page=${perPage}`);
  }

  getSingleTobacco(id: string): Observable<Tobacco> {
    return this.http.get<Tobacco>(`${this.api}/tobaccos/${id}`);
  }

  getAllTobaccosWithMenthol(): Observable<Tobacco[]> {
    return this.http.get<Tobacco[]>(`${this.api}/tobaccos?categories=4&per_page=1000`);
  }

  getAllTobaccosWithoutMenthol(): Observable<Tobacco[]> {
    return this.http.get<Tobacco[]>(`${this.api}/tobaccos?categories=8&per_page=1000`);
  }

  getAllShishas(perPage: number): Observable<Shisha[]> {
    return this.http.get<Shisha[]>(`${this.api}/shishas?per_page=${perPage}`);
  }

  getSingleShisha(id: number): Observable<Shisha> {
    return this.http.get<Shisha>(`${this.api}/shishas/${id}`);
  }

  getAllSmallShishas(): Observable<Shisha[]> {
    return this.http.get<Shisha[]>(`${this.api}/shishas?categories=5&per_page=1000`);
  }

  getAllMediumShishas(): Observable<Shisha[]> {
    return this.http.get<Shisha[]>(`${this.api}/shishas?categories=6&per_page=1000`);
  }

  getAllLargeShishas(): Observable<Shisha[]> {
    return this.http.get<Shisha[]>(`${this.api}/shishas?categories=7&per_page=1000`);
  }

  addCommentToPost(author_id: string, author_name: string, post: string, comment: string): Observable<any> {
    return this.http.post(`${this.apiV2}/comments`, {
      'post': post.toString(),
      'author': author_id.toString(),
      'author_name': author_name,
      'comment': comment
    });
  }

  getAllComments(id: string){
    return this.http.get(`${this.apiV2}/comments/tobaccos/comments`, { params: { 'id': id } });
  }



}
