import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FightersService {
  async getAllFighter() {
    const users = await axios.get('http://localhost:8000/api/fighters');
    return users.data;
  }
  async getFighterById(id: number) {
    console.log(id);

    const users = await axios.get(`http://localhost:8000/api/fighters/${id}`);
    return users.data;
  }
}
