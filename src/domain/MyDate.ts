const week = ['日', '一', '二', '三', '四', '五', '六'];

export class MyDate {
  date: Date;
  year: number;
  month: number;
  day: number;
  week: string;

  constructor(date: Date) {
    this.date = date;
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.week = week[date.getDay()];
  }

  getNextDay(): MyDate {
    let newDay = new Date();
    newDay.setDate(this.date.getDate() + 1);
    return new MyDate(newDay);
  }

  toString(): string {
    return this.year + ',' + this.month + ',' + this.day;
  }

}