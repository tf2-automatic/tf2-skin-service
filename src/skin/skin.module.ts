import { Module } from '@nestjs/common';
import { SkinService } from './skin.service';
import { SkinController } from './skin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skin } from './entities/skin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skin])],
  providers: [SkinService],
  controllers: [SkinController],
})
export class SkinModule {}
