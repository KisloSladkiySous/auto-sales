import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-rouring.module';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
