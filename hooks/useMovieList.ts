import useSwr from "swr";
import fetcher from "@/lib/fetcher";


const useMovieList = ()=>{
    const {data, error, isLoading } = useSwr('/api/movies', fetcher,{
        revalidateIfState: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    return {
        data, error, isLoading
    }
}

export default useMovieList;