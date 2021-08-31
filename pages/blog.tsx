import Layout from "../components/Layout";
import styles from '../styles/Blog.module.css'

interface Posts {
  id: number,
  title: string,
  body: string
}

interface BlogProps {
  dataBlog: Posts[]
}
function Blog(props: BlogProps) {
  const { dataBlog } = props
  return (
    <Layout pageTitle="Blog Page">
      {
        dataBlog.map((blog) => {
          return (
            <div key={blog.id} className={styles.card}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json()

  return {
    props: {
      dataBlog
    }
  }
}
