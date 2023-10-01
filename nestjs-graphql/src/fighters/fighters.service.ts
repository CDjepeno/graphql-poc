import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateFighterInput } from 'src/dto/Create-fighter.input';

@Injectable()
export class FightersService {
  async getAllFighter() {
    const users = await axios.get('http://localhost:8000/api/fighters');
    return users.data;
  }
  async getFighterById(id: number) {
    const users = await axios.get(`http://localhost:8000/api/fighters/${id}`);
    return users.data;
  }

  async createFighter(createFighterInput: CreateFighterInput) {
    const users = await axios.post(
      `http://localhost:8000/api/fighter`,
      createFighterInput,
    );
      return users.data;
  }
}
