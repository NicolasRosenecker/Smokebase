import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {Tobacco} from "./tobacco";
import {Shisha} from "./shisha";

@Injectable()

export class SmokebaseService {

  private api = 'https://api.s1810456030.student.kwmhgb.at/wp-json/acf/v3';

  constructor(private http: HttpClient) { }

  getAllTobaccos(perPage: number): Observable<Tobacco[]> {
    return this.http.get<Tobacco[]>(`${this.api}/tobaccos?per_page=${perPage}`);
  }

  getSingleTobacco(id: string): Observable<Tobacco> {
    return this.http.get<Tobacco>(`${this.api}/tobaccos/${id}`);
  }

  getAllShishas(perPage: number): Observable<Shisha[]> {
    return this.http.get<Shisha[]>(`${this.api}/shishas?per_page=${perPage}`);
  }

  getSingleShisha(id: number): Observable<Shisha> {
    return this.http.get<Shisha>(`${this.api}/shishas/${id}`);
  }

  addCommentToPost(author_id: number, author_name: string, post: number, comment: string): Observable<any> {
    return this.http.post(`https://api.s1810456030.student.kwmhgb.at/wp-json/wp/v2/comments`, {
      'post': post.toString(),
      'author': author_id.toString(),
      'author_name': author_name,
      'comment': comment
    });
  }



}
