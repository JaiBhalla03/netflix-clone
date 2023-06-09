import Head from "next/head";
import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavBar from "@/components/NavBar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if(!session){
        return {
            redirect:{
                destination:'/auth',
                permanent: false,
            }
        }
    }
    return {
        props:{}
    }
}


export default function Home() {
    const {data: movies =[]} = useMovieList();

  return (
    <>
      <NavBar/>
      <BillBoard/>
        <div className={'pb-40'}>
            <MovieList title={'Trending Now'} data={movies}/>
        </div>

    </>
  )
}
