import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FightersService {
  async getAllFighter() {
    const users = await axios.get('http://localhost:8000/api/fighters');
    return users.data;
  }
}
