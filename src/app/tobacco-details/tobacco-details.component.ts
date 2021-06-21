import { Component, OnInit } from '@angular/core';
import {SmokebaseService} from "../shared/smokebase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tobacco} from "../shared/tobacco";
import {TobaccoFactory} from "../shared/tobacco-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../shared/user";

@Component({
  selector: 'bs-tobacco-details',
  templateUrl: './tobacco-details.component.html',
  styleUrls: ['tobacco-details.component.css']
})
export class TobaccoDetailsComponent implements OnInit {
  tobacco: Tobacco = TobaccoFactory.empty();

  user: User | undefined;

  constructor(
    private app: SmokebaseService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingleTobacco(params['id']).subscribe(t => this.tobacco = t);
  }

  addComment(){
    /*this.app.addCommentToPost(
      this.user!.id,
      this.user!.user_nicename
      this.item.id,
      this.commentForm.controls['comment'].value).subscribe(response => {
      this.comments = [];
      this.getComments();
      this.commentForm.reset();
    })*/
  }

}
