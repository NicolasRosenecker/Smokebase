import { Component, OnInit } from '@angular/core';
import { Shisha } from "../shared/shisha";
import { ShishaFactory } from "../shared/shisha-factory";
import {SmokebaseService} from "../shared/smokebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../shared/user";
import {UserFactory} from "../shared/user-factory";

@Component({
  selector: 'bs-shisha-details',
  templateUrl: './shisha-details.component.html',
  styleUrls: ['shisha-details.component.css'
  ]
})
export class ShishaDetailsComponent implements OnInit {

  shisha: Shisha = ShishaFactory.empty();
  comments: Array<any> = [];
  commentFormShisha!: FormGroup;
  user: User | null = UserFactory.empty();

  constructor(
    public app: SmokebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingleShisha(params['id']).subscribe(s => {
      this.shisha = s;
      console.table(s.acf);
    });

    this.commentFormShisha = this.fb.group({
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
    this.app.addCommentToPost(this.user.id.toString(), this.user.user_email, this.route.snapshot.params["id"], this.commentFormShisha.value["comment"], localStorage.getItem("token")!).subscribe(res =>{
      console.log(res);
    });
  }

  deleteComment(id: string){
    this.app.deleteCommentFromPost(id).subscribe(res =>{
      console.log(res);
    });
  }

}
