import { Resolver, Query, Args } from '@nestjs/graphql';
import { FightersService } from './fighters.service';

@Resolver()
export class FightersResolver {
  constructor(private fighterService: FightersService) {}

  @Query()
  getFighters() {
    return this.fighterService.getAllFighter();
  }

  @Query()
  getFighterById(@Args('id') id: number) {
    return this.fighterService.getFighterById(id);
  }
}
