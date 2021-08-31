import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import styles from "./User.module.css"

interface userProps {
  userData: Array<any>
}
function Users(props: userProps) {
  const { userData } = props
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      {userData.map((user) => {
        return (
          <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default Users

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const userData = await res.json()
  return {
    props: {
      userData,
    }
  }
}
