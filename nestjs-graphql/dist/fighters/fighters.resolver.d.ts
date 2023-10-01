import { FightersService } from './fighters.service';
import { CreateFighterInput } from '../dto/Create-fighter.input';
export declare class FightersResolver {
    private fighterService;
    constructor(fighterService: FightersService);
    getFighters(): Promise<any>;
    getFighterById(id: number): Promise<any>;
    createFighter(createFighterInput: CreateFighterInput): Promise<any>;
}
