import { useSession, signIn, signOut } from "next-auth/react"
import NavBar from "../components/navbar";

export default function CamperVanPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <NavBar/>
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn("github")}>Sign in</button>
      <NavBar/>
    </>
  )
}