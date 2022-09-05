import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Quiz } from "../models/quiz.model";
import { mapToModel } from "../shared/utils/app.mapper";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {}

  add(quiz: Quiz) {
    console.log(quiz);
    // this.db.list(`quizes/`).push(quiz);
    this.httpClient.post('http://localhost:3000/quiz', quiz).subscribe((data: any) => {
      console.log(data);
    })
  }

  get(key: string) {
    return this.httpClient.get('http://localhost:3000/quiz');
    // return this.db.object<Quiz>(`quizes/${key}`).valueChanges();
  }

  getAll() {
    return this.httpClient.get('http://localhost:3000/quiz');
      // this.db.list<Quiz>(`quizes`, ref => ref.orderByChild("title")).snapshotChanges()
  }

  update(quiz: Quiz, _id: string) {
    console.log(quiz, _id);
    return this.httpClient.put('http://localhost:3000/quiz/'+_id, quiz).subscribe(() => {});

    // this.db.object(`quizes/${key}`).update(quiz);
  }

  delete(_id: string) {
    console.log(_id);
    return this.httpClient.delete('http://localhost:3000/subject/'+_id).subscribe(() => {});
    // this.db.object(`quizes/${key}`).remove();
  }
}
