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
    return this.httpClient.get('http://localhost:3000/subject');
  }

  update(category: Category, _id: string) {
    console.log(category, _id);
    return this.httpClient.put('http://localhost:3000/subject/'+_id, category).subscribe(() => {});
    // this.db.object(`categories/${key}`).update(category);
  }

  delete(_id: string) {
    console.log(_id);
    return this.httpClient.delete('http://localhost:3000/subject/'+_id).subscribe(() => {});
    // this.db.object(`categories/${key}`).remove();
  }
}
