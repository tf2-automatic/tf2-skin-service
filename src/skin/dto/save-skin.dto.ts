import { IsInt, IsString } from 'class-validator';

export class SaveSkinDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;
}
