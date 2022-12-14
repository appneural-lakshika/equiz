import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { Router, ActivatedRoute } from "@angular/router";
import { Question } from "src/app/models/question.model";
import { QuestionService } from "src/app/services/question.service";
import { ConfirmModalComponent } from "src/app/shared/components/confirm-modal/confirm-modal.component";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  displayedColumns: string[] = ["number", "question", "key"];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLoading = false;
  quizKey: string;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      if (data["quizKey"]) {
        this.quizKey = data["quizKey"];
        this.getQuestions(data["quizKey"]);
      }
    });
  }

  getQuestions(quizKey: string) {
    this.questionService.getAll(quizKey).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);

      setTimeout(() => {
        this.dataSource.filterPredicate = (
          data: { question: string },
          filterValue: string
        ) =>
          data.question
            .trim()
            .toLowerCase()
            .indexOf(filterValue) !== -1;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 100);

      this.isLoading = true;
    });
  }

  addQuestion() {
    this.router.navigateByUrl(`question/add-question/${this.quizKey}`);
  }

  openDialog(key: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRemove(key);
      }
    });
  }

  onRemove(key: string) {
    this.questionService.delete(key);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
