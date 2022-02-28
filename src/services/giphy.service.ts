import axios from 'axios';

import { Category } from '../models/categories.model';

const apiKey: string = 'f4nA7EJOnybwdpv9cnTsCG10bpEKm54g';

export const getGiphies = (type: Category, limit: number = 25) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${type}&limit=${limit}`
  );

export {};
