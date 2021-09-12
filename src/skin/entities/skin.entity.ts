import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Skin {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    unique: true,
  })
  name: string;
}
