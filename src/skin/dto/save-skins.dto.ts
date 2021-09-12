import { Type } from 'class-transformer';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';
import { SaveSkinDto } from './save-skin.dto';

export class SaveSkinsDto {
  @IsDefined()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => SaveSkinDto)
  readonly skins: SaveSkinDto[];
}
