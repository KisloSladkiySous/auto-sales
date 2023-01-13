/* eslint-disable */
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend'
  arr: any[] = [1, 2, 3, 4, 6]
  searchedVal = 4
  obj: any | null = null
  ngOnInit(): void {
    // this.arr.forEach((el, i) => {
    //   console.log(typeof el)
    //   try {
    //     if (el === this.searchedVal) {
    //       this.obj = this.arr[i + 1]
    //     }
    //   } catch (err: any) {
    //     throw new Error(err)
    //   }
    // })
    // if (this.obj) {
    //   console.log(this.obj)
    // } else {
    //   console.log('dolbaeb')
    // }
  // this.arr.filter((val,i) => val === this.searchedVal ? (this.obj = this.arr[i + 1]) : null)
  //   console.log(this.obj)
    let index :any = this.arr.indexOf(this.searchedVal) > -1 ? this.arr.indexOf(this.searchedVal) + 1 : null
   let obj = this.arr[index]
  }
}
