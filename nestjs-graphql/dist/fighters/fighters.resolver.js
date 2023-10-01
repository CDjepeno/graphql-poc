"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const fighters_service_1 = require("./fighters.service");
const Create_fighter_input_1 = require("../dto/Create-fighter.input");
const fighter_entity_1 = require("../entities/fighter.entity");
let FightersResolver = class FightersResolver {
    constructor(fighterService) {
        this.fighterService = fighterService;
    }
    getFighters() {
        return this.fighterService.getAllFighter();
    }
    getFighterById(id) {
        return this.fighterService.getFighterById(id);
    }
    createFighter(createFighterInput) {
        return this.fighterService.createFighter(createFighterInput);
    }
};
exports.FightersResolver = FightersResolver;
__decorate([
    (0, graphql_1.Query)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FightersResolver.prototype, "getFighters", null);
__decorate([
    (0, graphql_1.Query)(),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FightersResolver.prototype, "getFighterById", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('createFighterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_fighter_input_1.CreateFighterInput]),
    __metadata("design:returntype", void 0)
], FightersResolver.prototype, "createFighter", null);
exports.FightersResolver = FightersResolver = __decorate([
    (0, graphql_1.Resolver)(() => fighter_entity_1.Fighter),
    __metadata("design:paramtypes", [fighters_service_1.FightersService])
], FightersResolver);
//# sourceMappingURL=fighters.resolver.js.map