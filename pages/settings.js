import Image from 'next/image'
import NavBar from '../components/navbar';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Settings() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  return (
    <>
      <div style={{ height: "calc(100vh - 70px)", backgroundColor: "#FAF4DF" }}
        className="">
        {status === "loading"
          ? <div>Loading...</div>
          : (status === "authenticated" ?
            <div>
              <div className="">Logged in as: {userEmail}</div>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
            :
            <div>
              <p>Not signed in.</p>
              <button onClick={() => signIn("github")}>Sign in</button>
            </div>
          )}
      </div>
      <NavBar />
    </>
  )
}
