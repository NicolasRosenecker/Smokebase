import { Component, OnInit } from '@angular/core';
import {SmokebaseService} from "../shared/smokebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tobacco} from "../shared/tobacco";
import {TobaccoFactory} from "../shared/tobacco-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../shared/user";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Comment} from "../shared/comment";
import {UserFactory} from "../shared/user-factory";
import {toArray} from "rxjs/operators";


@Component({
  selector: 'bs-tobacco-details',
  templateUrl: './tobacco-details.component.html',
  styleUrls: ['tobacco-details.component.css']
})
export class TobaccoDetailsComponent implements OnInit {
  tobacco: Tobacco = TobaccoFactory.empty();
  commentFormTobacco!: FormGroup;
  user: User | null = UserFactory.empty();
  comments: Array<any> = [];
  //strippedComments: Array<any> = [];

  constructor(
    public app: SmokebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingleTobacco(params['id']).subscribe(t => {
      this.tobacco = t;
      console.table(t.acf);
    });

    this.commentFormTobacco = this.fb.group({
      comment: ["", ],
    });

    if (this.authService.isLoggedIn()) this.user = this.authService.getLoggedInUser();

    this.app.getAllComments(params["id"]).subscribe(c =>{
      this.comments.push(c);
      /*for(let comment of this.comments[0]){
        let cleanComment = comment.content["rendered"].replace(/<\/?[^>]+(>|$)|\n/g, "");
        this.strippedComments.push(cleanComment);
      }*/
    });
  }

  addComment(){
    // @ts-ignore
    this.app.addCommentToPost(this.user.id.toString(), this.user.user_email, this.route.snapshot.params["id"], this.commentFormTobacco.value["comment"], localStorage.getItem("token")!).subscribe(res =>{
      console.log(res);
    });
  }

  deleteComment(id: string){
    this.app.deleteCommentFromPost(id).subscribe(res =>{
      console.log(res);
    });
  }

}
