export class Product {

  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  date_created: Date;
  date_updated: Date;


  constructor(id: number, name: string, price: number, description: string, image: string, date_created: Date, date_updated: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.date_created = date_created;
    this.date_updated = date_updated;
  }
}
