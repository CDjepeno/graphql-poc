import { CreateFighterInput } from 'src/dto/Create-fighter.input';
export declare class FightersService {
    getAllFighter(): Promise<any>;
    getFighterById(id: number): Promise<any>;
    createFighter(createFighterInput: CreateFighterInput): Promise<any>;
}
