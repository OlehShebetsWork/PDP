import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Pet {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  age: number;
}
