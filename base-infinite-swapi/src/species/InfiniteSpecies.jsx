import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { Species } from './Species';

const initialUrl = 'https://swapi.dev/api/species/';
const fetchUrl = async (url) => {
  const response = await axios.get(url);
  return response;
};

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
}
