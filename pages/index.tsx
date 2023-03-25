import Head from "next/head";
import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import NavBar from "@/components/NavBar";
import BillBoard from "@/components/BillBoard";

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
    const {data: user} = useCurrentUser();

  return (
    <>
      <NavBar/>
      <BillBoard/>
    </>
  )
}
