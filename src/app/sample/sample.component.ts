import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-sample",
    standalone: true,
    imports: [ButtonComponent, CommonModule],
    templateUrl: "./sample.component.html",
    styleUrl: "./sample.component.sass",
})
export class SampleComponent {}
