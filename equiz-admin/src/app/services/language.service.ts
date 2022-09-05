import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Language } from "../models/language.model";
import { mapToModel } from "../shared/utils/app.mapper";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {}

  add(language: Language) {
    console.log(language);
    this.httpClient.post('http://localhost:3000/language', language).subscribe((data: any) => {
      console.log(data);
    })
    // this.db.list(`categories/`).push(category);
  }

  get(key: string) {
    return this.httpClient.get('http://localhost:3000/language');
    // return this.db.object<Language>(`languages/${key}`).valueChanges();
  }

  getAll() {
    // return mapToModel(
    //   this.db
    //     .list<Language>(`languages`, ref => ref.orderByChild("name"))
    //     .snapshotChanges()
    // );
    return this.httpClient.get('http://localhost:3000/language');

  }

  // getActives() {
  //   return mapToModel(
  //     this.db
  //       .list<Language>("/languages", ref =>
  //         ref.orderByChild("status").equalTo(true)
  //       )
  //       .snapshotChanges()
  //   );
  // }
  getActives() {
    return this.httpClient.get('http://localhost:3000/language');
  }

  // update(language: Language, key: string) {
  //   this.db.object(`languages/${key}`).update(language);
  // }
  update(languages: Language, _id: string) {
    console.log(languages, _id);
    return this.httpClient.put('http://localhost:3000/language/'+_id, languages).subscribe(() => {});
    // this.db.object(`categories/${key}`).update(category);
  }

  // delete(key: string) {
  //   this.db.object(`languages/${key}`).remove();
  // }
  delete(_id: string) {
    console.log(_id);
    return this.httpClient.delete('http://localhost:3000/language/'+_id).subscribe(() => {});
    // this.db.object(`categories/${key}`).remove();
  }

}
