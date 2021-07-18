export class Category {

  id: number;
  name: string;
  iconClass: string
  date_created: Date;
  date_updated: Date;


  constructor(id: number, name: string, iconClass: string, date_created: Date, date_updated: Date) {
    this.id = id;
    this.name = name;
    this.iconClass = iconClass;
    this.date_created = date_created;
    this.date_updated = date_updated;
  }
}
