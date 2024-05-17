import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FirstComponentComponent } from "./Components/first-component/first-component.component";
import { AppComponent } from "./app.component";
import { FormsPracticeComponent } from "./Components/forms-practice/forms-practice.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, FirstComponentComponent, FormsPracticeComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
