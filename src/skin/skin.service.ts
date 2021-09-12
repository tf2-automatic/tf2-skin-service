import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveSkinDto } from './dto/save-skin.dto';
import { Skin } from './entities/skin.entity';

@Injectable()
export class SkinService {
  constructor(
    @InjectRepository(Skin)
    private skinRepository: Repository<Skin>,
  ) {}

  saveSkins(save: SaveSkinDto[]): Promise<void> {
    const skins = this.skinRepository.create(save);
    return this.skinRepository.save(skins).then(() => {
      return;
    });
  }

  async getSkinByName(name: string): Promise<Skin> {
    const skin = await this.skinRepository
      .createQueryBuilder()
      .select()
      .where({
        name,
      })
      .getOne();

    return skin;
  }

  getSkinById(id: number): Promise<Skin> {
    return this.skinRepository.findOne(id);
  }
}
