import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent, ChipComponent } from "root";
import {} from "root";

@Component({
    selector: "app-sample",
    standalone: true,
    imports: [ButtonComponent, CommonModule, ChipComponent],
    templateUrl: "./sample.component.html",
    styleUrl: "./sample.component.sass",
})
export class SampleComponent {}
