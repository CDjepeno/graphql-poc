import { Resolver, Query } from '@nestjs/graphql';
import { FightersService } from './fighters.service';

@Resolver()
export class FightersResolver {
  constructor(private fighterService: FightersService) {}

  @Query()
  getFighters() {
    return this.fighterService.getAllFighter();
  }
}
