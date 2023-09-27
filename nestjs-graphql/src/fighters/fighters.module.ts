import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersResolver } from './fighters.resolver';

@Module({
  providers: [FightersService, FightersResolver],
})
export class FightersModule {}
