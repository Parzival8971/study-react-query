import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await axios.get(url);
  return response;
};

export function InfinitePeople() {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
}
