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

@Component({
  selector: 'bs-tobacco-details',
  templateUrl: './tobacco-details.component.html',
  styleUrls: ['tobacco-details.component.css']
})
export class TobaccoDetailsComponent implements OnInit {
  tobacco: Tobacco = TobaccoFactory.empty();
  commentFormTobacco!: FormGroup;
  user: User | null = UserFactory.empty();
  comments: Comment[] = [];

  constructor(
    private app: SmokebaseService,
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

  }



  addComment(){
    this.app.addCommentToPost(
      // @ts-ignore
      this.user.id.toString(),
      // @ts-ignore
      this.user.user_display_name,
      this.route.snapshot.params["id"],
      this.commentFormTobacco.value["comment"]).subscribe(response => {
        this.comments = [];
        this.getAllComments();
        this.commentFormTobacco.reset();
    });
  }

  getAllComments(){
    this.app.getAllComments(this.route.snapshot.params["id"]).subscribe(response => {
      /*response.forEach(comment => {
        this.comments.push(CommentFactory.fromObject(comment));
      });*/

      console.log(response);
    })
  }

}
