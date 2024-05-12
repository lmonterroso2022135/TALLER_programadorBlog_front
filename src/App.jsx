import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'

function Sidebar() {
  return (
    <div className='w-300 bg-green-500 h-full grow rounded-lg p-5'>
      <div className='bg-stone-500 rounded-lg m-3 h-fullw-full flex-col py-4' >
        <div className='flex-col'>
          <div className='flex justify-center'>
            <h1>AAAAAAAAAAAAAAAAAAAAAAAA</h1>
          </div>
          <div className='flex'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat libero corrupti rem nulla cupiditate cumque, laborum at voluptate quis facere mollitia harum veniam, ea modi sit alias expedita recusandae.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export function Content() {
  return (
    <div className='bg-red-300 w-full h-full m-3'>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium unde voluptates commodi amet cum tempore dolorem cumque, dicta blanditiis. Saepe, officia magnam! Deleniti molestiae necessitatibus minima aut dolore iusto?

      </h2>
      <br />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic excepturi voluptatum labore. Vitae nihil nam ut temporibus ex possimus sed laborum nulla repellat dolor, quos voluptatem obcaecati omnis tenetur quasi?</p>
    </div>
  )
}

function App() {
  return <div className='flex bg-blue-200 w-full h-screen gap-4 p-4 md:p-12 items-start overflow-hidden'>
    <Sidebar />
    <div className=' w-full h-full overflow-y-scroll scrollbar-none ' >
      <Outlet />
      {/* <Comments/> */}
    </div>
  </div>
}

export default App
