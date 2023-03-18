import { useSession } from "next-auth/react"
import Header from "@/components/Header"

export default function Index() {
  const {data: session} = useSession()

  return (
    <>
		<Header></Header>
		<main>
			<h1>opa {session?.user?.name}</h1>
		</main>
    </>
  )
}