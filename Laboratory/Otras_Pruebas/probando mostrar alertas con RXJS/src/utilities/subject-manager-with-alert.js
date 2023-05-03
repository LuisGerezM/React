import { Subject } from "rxjs";

export class SubjectManagerWithAlert {
  subject$ = new Subject();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value) {
    this.subject$.next(value);
  }
}
