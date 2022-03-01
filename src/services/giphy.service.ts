import { useState, useCallback } from 'react';

import axios from 'axios';

import { Category } from '../models/categories.model';
import { IGiphy } from '../models/giphy.model';

const apiKey: string = 'f4nA7EJOnybwdpv9cnTsCG10bpEKm54g';

export const getGiphies = (
  type: Category,
  offset: number = 0,
  limit: number = 25
) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${type}&offset=${offset}&limit=${limit}`
  );

type GetGiphiesParams = {
  appendResult?: boolean;
  type: Category;
  offset?: number;
  limit?: number;
};

export const useGetGiphies: () => [
  (params: GetGiphiesParams) => void,
  IGiphy[] | null | undefined,
  boolean,
  boolean
] = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [response, setResponse] = useState<IGiphy[] | null | undefined>(null);

  const getFunc = useCallback((params: GetGiphiesParams): void => {
    setLoading(true);
    setError(false);
    getGiphies(params.type, params.offset, params.limit)
      .then((result) => {
        const newResult = result.data.data.map((x: any) => ({
          id: x.id,
          img: x.images.original.url,
          title: x.title,
        }));

        if (params.appendResult)
          setResponse((prev) => [...(prev || []), ...newResult]);
        else setResponse(newResult);
        setLoading(false);
      })
      .catch((e) => {
        setResponse(null);
        setError(true);
        setLoading(false);
      });
  }, []);

  return [getFunc, response, loading, error];
};

export {};
