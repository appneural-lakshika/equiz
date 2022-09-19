import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "src/app/models/category.model";
import { ConfirmModalComponent } from "src/app/shared/components/confirm-modal/confirm-modal.component";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  category: Category[];
  displayedColumns: string[] = ["number", "name", "key"];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLoading = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.categoryService.getAll().subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (
          data: { name: string },
          filterValue: string
        ) => data.name.trim().toLowerCase().indexOf(filterValue) !== -1;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.isLoading = true;
      });
    }, 1000);
  }

  getCategories() {}

  openDialog(key) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onRemove(key);
      }
    });
  }

  onRemove(key: string) {
    this.categoryService.delete(key);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
