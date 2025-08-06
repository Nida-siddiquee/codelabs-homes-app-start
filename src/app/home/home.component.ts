import { CommonModule } from "@angular/common";
import {
  Component,

} from "@angular/core";
import { Item } from "./types";
import { FormsModule } from "@angular/forms";
import { ItemComponent } from "../item/item.component";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, FormsModule, ItemComponent]
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

  removeItem(item:Item){
    this.allItems.splice(this.allItems.indexOf(item),1)
  }
}
