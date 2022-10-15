import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import style from './App.module.css'
import './global.css'

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/caueenrico.png',
      name: 'Caue Enrico',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-04 21:30:00')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={style.wrapper}>

        <Sidebar />

        {/* fazendo um ITERAÇÃO com MAP */}
        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }

        </main>


      </div>
    </div>
  )
}


