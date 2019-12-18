import { NgModule } from '@angular/core';
import { WidgetsComponent } from './widgets.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [WidgetsComponent, FooterComponent],
  imports: [
  ],
  exports: [WidgetsComponent, FooterComponent]
})
export class WidgetsModule { }
