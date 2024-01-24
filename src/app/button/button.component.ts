import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.sass",
})
export class ButtonComponent {
    @Input() size = "sm";
    @Input() title = "";
    @Input() type = "primary";
}
