import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Category } from "../models/category.model";
import { mapToModel } from "../shared/utils/app.mapper";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {}

  add(category: Category) {
    console.log(category);
    this.httpClient.post('http://localhost:3000/subject', category).subscribe((data) => {
      console.log(data);
    })
    // this.db.list(`categories/`).push(category);
  }

  get(key: string) {
    return this.httpClient.get('http://localhost:3000/subject');
    // return this.db.object<Category>(`categories/${key}`).valueChanges();
  }

  getAll() {
    return this.httpClient.get('http://localhost:3000/subject');
  }

  getActives() {
    return mapToModel(
      this.db
        .list<Category>("/categories", ref =>
          ref.orderByChild("status").equalTo(true)
        )
        .snapshotChanges()
    );
  }

  update(category: Category, key: string) {
    this.db.object(`categories/${key}`).update(category);
  }

  delete(key: string) {
    this.db.object(`categories/${key}`).remove();
  }
}
