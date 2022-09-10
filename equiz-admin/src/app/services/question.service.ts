import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
// import { mapToModel } from "../shared/utils/app.mapper";
import { Question } from "../models/question.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {}

  add(quizKey: string, question: Question) {
    // this.db.list(`quizes/${quizKey}/questions/`).push(question);
    this.httpClient.post('http://localhost:3000/question/'+ quizKey, question).subscribe((data: any) => {
    })
  }

  get(quizKey: string, key: string) {
    return this.httpClient.get('http://localhost:3000/question/'+ quizKey);
    // return mapToModel(
      // this.db.list<Question>(`quizes/${quizKey}/questions`).snapshotChanges()
  }

  getAll(quizKey: string) {
    return this.httpClient.get('http://localhost:3000/question/'+ quizKey);
    // return mapToModel(
      // this.db.list<Question>(`quizes/${quizKey}/questions`).snapshotChanges()
  }

  update(question: Question,  _id: string) {
    console.log( _id);
    return this.httpClient.put('http://localhost:3000/question/'+_id, question).subscribe(() => {});
    // this.db.object(`quizes/${quizKey}/questions/${key}`).update(question);
  }

  delete( _id: string) {
    console.log(_id);
    return this.httpClient.delete('http://localhost:3000/question/'+_id).subscribe(() => {});
    // this.db.object(`quizes/${quizKey}/questions/${key}`).remove();
  }
}
