import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

import { Person } from './Person';
const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await axios.get(url);
  return response;
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'sw-people',
    ({ pageParam = initialUrl }) => initialUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
}