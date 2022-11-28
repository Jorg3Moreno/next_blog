import useSWR from "swr";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function useFetcher(endpoint) {
  const { data, error } = useSWR(`${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
