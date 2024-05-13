import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { Category } from "../../state/state";

@Component({
  selector: "app-category-list-presenter",
  templateUrl: "./category-list-presenter.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListPresenter {
  @Input() categories: Category[] = [];
}
