import useSWR from "swr";

const baseURL = process.env.BASE_URL;

const response = (...args) => fetch(...args).then((res) => res.json());

export default function useFetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
