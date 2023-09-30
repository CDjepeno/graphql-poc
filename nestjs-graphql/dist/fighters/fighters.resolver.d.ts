import { FightersService } from './fighters.service';
export declare class FightersResolver {
    private fighterService;
    constructor(fighterService: FightersService);
    getFighters(): Promise<any>;
    getFighterById(id: number): Promise<any>;
}
