import { useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Header1 from './components/Header1'
import { useNavigate } from 'react-router-dom'

export type User = {
  id: Number
  email: String
  name: String
  Password: String
  phoneNumber: String
  posts: Post[]
}

export type Post = {
  id: number
  title: string
  image: string
  content: string
  price: number
  saved: boolean
  toSell: boolean
  toBuy: boolean
  userId: number
  tags: Tag[]
}

export type Tag = {
  id: number
  name: string
  posts: Post[]
}

function App() {
  
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  let navigate = useNavigate()

  function signIn(data: any){
    setCurrentUser(data.user)
    localStorage.token = data.token
    navigate('/')
  }

  function signOut(){
    setCurrentUser(null)
    delete localStorage.token
    navigate('/login')
  }

  useEffect(() => {
    if(localStorage.token){
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      }).then(res => res.json())
      .then(result => {
        if(result.error){
          alert(result.error)
        } else {
          signIn(result.data)
        }
      })
    }
  }, [])

  return (
    <div className="App">
        <Header1 />
    </div>
  )
}

export default App
