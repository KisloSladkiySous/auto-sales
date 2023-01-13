import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/modules/auth/services/auth.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    this.auth
      .signIn({
        email: 'sladkiysous@gmail.com',
        username: 'corvusLoh',
        password: 'UserUser123',
      })
      .subscribe((res) => console.log(res))
  }
}
