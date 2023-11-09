import Image from 'next/image'
import NavBar from '../components/navbar';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Community() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  return (
    <>
      <div style={{ height: "calc(100vh - 70px)", backgroundColor: "#FAF4DF" }}
        className="">
        <div className="font-sans text-3xl font-bold p-4 border-2 border-b-black">UFO Community</div>

        {status === "loading"
          ? <div style={{ height: "calc(100% - 70px)" }}
            className="flex flex-col justify-center items-center">Loading...</div>
          : (
            status === "authenticated"
              ?
              <div style={{ height: "calc(100% - 70px)" }}
                className="overflow-y-auto">
                <div className="flex overflow-x-auto">
                  {/* stories */}
                  {new Array(10).fill(0).map((x, i) =>
                    <Image key={i} src="/icon/home.png" alt="Home Icon" width={100} height={100} />
                  )}
                </div>
                <div className="">
                  {/* posts */}
                  {new Array(10).fill(0).map((x, i) =>
                    <Image key={i} src="/icon/scan.png" alt="Scan Icon" width={100} height={100} />
                  )}
                </div>
              </div>
              :
              <div style={{ height: "calc(100% - 70px)" }}
                className="flex flex-col justify-center items-center">
                <p>Sign in to view content.</p>
                <button onClick={() => signIn("github")}
                  className="bg-slate-600 px-2 py-1 rounded-md">Sign in</button>
              </div>
          )
        }
      </div>
      <NavBar />
    </>
  )
}
