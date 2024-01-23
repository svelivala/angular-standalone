import { Component, Input } from "@angular/core";

@Component({
    selector: "lib-button",
    standalone: true,
    imports: [],
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.css",
})
export class MyButtonComponent {
    @Input() size = "sm";
    @Input() title = "";
    @Input() type = "primary";
}
