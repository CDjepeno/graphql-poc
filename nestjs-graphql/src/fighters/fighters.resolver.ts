import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { FightersService } from './fighters.service';
import { CreateFighterInput } from '../dto/Create-fighter.input';
import { Fighter } from '../entities/fighter.entity';

@Resolver(() => Fighter)
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

  @Mutation()
  createFighter(
    @Args('createFighterInput') createFighterInput: CreateFighterInput,
  ) {
    return this.fighterService.createFighter(createFighterInput);
  }
}
