import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  signIn(data: any): Observable<any> {
    return this.http.post('api/auth/users/', data)
  }
}
// UserCreate{
//   email	string($email)
//   title: Адрес электронной почты
//   maxLength: 254
//   username*	string
//   title: Имя пользователя
//   pattern: ^[\w.@+-]+$
//   maxLength: 150
//   minLength: 1
//   Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.

//   password*	string
//   title: Password
//   minLength: 1

//   }
