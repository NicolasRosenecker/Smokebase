import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {Tobacco} from "./tobacco";
import {Shisha} from "./shisha";
import {Token} from "@angular/compiler";

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

  addCommentToPost(author_id: string, author_email: string, post_id: string, comment: string, token: string): Observable<any> {
    return this.http.post(`${this.apiV2}/comments?post=` + post_id + "&content=" + comment, {
      'post': post_id,
      'comment': comment,
      'author': author_id,
      'author_email': author_email,
      'token' : token
    });
  }

  deleteCommentFromPost(comment_id: string): Observable<any> {
    return this.http.delete(`${this.apiV2}/comments/` + comment_id, {

    });
  }

  getAllComments(id: string){
    return this.http.get(`${this.apiV2}/comments?post=` + id);
  }

  cleanComment(comment: string){
    let cleanComment = comment.replace(/<\/?[^>]+(>|$)|\n/g, "");
    return cleanComment;
  }





}
