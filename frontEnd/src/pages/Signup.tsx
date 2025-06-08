import axios from "axios"
import { useState } from "react"
import { BiX } from "react-icons/bi"
import { Link } from "react-router-dom"
import signup from '../assets/img/authpics/img/signup.png'

function Signup() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [ver, setVer] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        try {
            const post = await axios.post('http://localhost:8080/api/auth/register', 
                {name, email, password}
            )

            if(post.data.success) {
                setVer(true)
            }
    
        } catch (error) {
            console.error('error message')
        }

    }

  return (
    <>
        <div className="min-h-screen flex justify-center items-center bg-[#f8f5f5]">
            <div className="p-5 bg-white flex flex-col items-center justify-center lg:flex-row lg:gap-6 lg:w-fit">
                <div className="">
                    <h2 className="capitalize font-bold text-xl mb-5">signin</h2>                    
                    <img src={signup} alt="" />
                </div>
                <form action="" autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="font-semibold mb-1">Username</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Username"
                            className="p-3 bg-[#e9eff1] w-full rounded-md outline-none mb-4"
                            autoComplete="new-username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-semibold mb-1">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={(e) => setEmail(e.target.value.toLowerCase())}
                            placeholder="Email"
                            className="p-3 bg-[#e9eff1] w-full rounded-md outline-none mb-4"
                            autoComplete="new-email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="font-semibold mb-1">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*****"
                            className="p-3 bg-[#e9eff1] w-full rounded-md outline-none mb-3"
                            required
                            autoComplete="new-password"
                        />
                    </div>
                    <div>
                        <label htmlFor="selection" className="font-semibold block mb-1">Role</label>
                        <select name="selection" id="selection" className="p-3 mb-3 w-full bg-[#e9eff1]">
                            <option value="doctor">Doctor</option>
                            <option value="doctor">User</option>
                        </select>
                    </div>

                    {ver ? (
                        <p 
                            className="w-full justify-center text-white p-5 bg-green-400 mb-5 inline-flex items-center gap-2">
                            Verification sent to Email 
                            <BiX 
                            onClick={() => setVer(false)}
                            className="size-8 cursor-pointer"/>
                            </p>
                    ): ''}

                    <button className="bg-blue-500 text-white w-full p-4 mb-4 cursor-pointer">Sign up</button>

                    <p className="text-center">Already have an account? <Link to={'/login'}>Sign In</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup