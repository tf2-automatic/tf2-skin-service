import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { SaveSkinsDto } from './dto/save-skins.dto';
import { Skin } from './entities/skin.entity';
import { SkinService } from './skin.service';

@Controller('skins')
export class SkinController {
  constructor(private readonly skinService: SkinService) {}

  @Post()
  async saveSkins(
    @Body(new ValidationPipe()) save: SaveSkinsDto,
  ): Promise<void> {
    await this.skinService.saveSkins(save.skins);
  }

  @Get('id/:id')
  async getSkinById(
    @Param('id', new ValidationPipe()) id: number,
  ): Promise<Skin> {
    const skin = await this.skinService.getSkinById(id);
    if (!skin) {
      throw new NotFoundException('No skin with given id');
    }

    return skin;
  }

  @Get('name/:name')
  async getSkinByName(@Param('name') name: string): Promise<Skin> {
    const skin = await this.skinService.getSkinByName(name);
    if (!skin) {
      throw new NotFoundException('No skin with given name');
    }

    return skin;
  }
}
