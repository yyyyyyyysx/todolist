import { MyDate } from "./MyDate.ts";

export class Task {
  date: MyDate;
  title: string;
  content: string;

  constructor(date: Date, title: string, content: string) {
    this.date = new MyDate(date);
    this.title = title;
    this.content = content;
  }

  toString(): string {
    return this.title + '-' + this.content;
  }

  edit(title: string, content: string): void {
    this.title = title;
    this.content = content
  }
}
