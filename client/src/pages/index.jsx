import { useSession } from "next-auth/react"

export default function Index() {
  const {data: session} = useSession()

  return (
    <>
      <main>
        <h1>opa {session?.user?.name}</h1>
      </main>
    </>
  )
}