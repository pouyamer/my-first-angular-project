import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-forms-practice",
  templateUrl: "./forms-practice.component.html",
  styleUrl: "./forms-practice.component.css",
})
export class FormsPracticeComponent implements OnInit, OnChanges {
  contactForm = new FormGroup({
    firstname: new FormControl("Pouya", [Validators.minLength(3)]),
    lastname: new FormControl("Emami"),
    email: new FormControl(""),
    phone: new FormControl(""),
    message: new FormControl(""),
    address: new FormGroup({
      street: new FormControl("Hello"),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    }),
  });

  isPropertyValid(propertyName: string) {
    return this.contactForm.get(propertyName)?.valid;
  }

  setNgStyleBasedOnStatus(propertyName: string) {
    return {
      "background-color": this.isPropertyValid(propertyName) ? "green" : "red",
    };
  }
  text = "";

  logger = () => {
    const { value } = this.contactForm;

    this.text = "";

    for (let property in value) {
      if (property === "address") break;
      this.text += `<p>${property}: ${this.contactForm.get(property)!.value} (${
        this.contactForm.get(property)!.status
      })</p>`;
    }
  };

  ngOnInit(): void {
    this.logger();
    this.contactForm.valueChanges.subscribe(this.logger);
  }

  ngOnChanges(): void {
    this.logger();
  }
}
