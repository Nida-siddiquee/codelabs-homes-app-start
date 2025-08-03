import { CommonModule } from "@angular/common";
import {
  Component,

} from "@angular/core";
import { Item } from "./types";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems: Item[] = [
    
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item?.done : !item?.done
    );
  }

  addItem(description: string) {
    if (!description) {
      return;
    }
    this.allItems.unshift({
      description,
      done: false
    });
  }
}
