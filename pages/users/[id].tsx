import { useRouter } from "next/router"
import Layout from "../../components/Layout"

interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string
}

interface UserDetails {
  user: User,
}

function userDetails(props: UserDetails) {
  const router = useRouter()
  const { id } = router.query
  const { user } = props
  return (
    <Layout pageTitle="User Details Page">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

export default userDetails

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const userData = await res.json();

  const paths = userData.map((user: User) => ({
    params: {
      id: `${user.id}`
    }
  }))
  return {
    paths,
    fallback: false
  }
}
interface GetStatticProps {
  params: {
    id: string
  }
}
export const getStaticProps = async (context: GetStatticProps) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user
    }
  }
}
