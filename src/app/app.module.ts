import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { PatternValidatorDirective } from './directives/pattern-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    TooltipDirective,
    PatternValidatorDirective,
    PipesDemoComponent,
    ReversePipe,
    TruncatePipe,
    TimeAgoPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
