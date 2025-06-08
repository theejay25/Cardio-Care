import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import signin from '../assets/img/authpics/img/login.png'

function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: any) => {

        e.preventDefault()

        try {
            
            const post: any = await axios.post('http://localhost:8080/api/auth/login', 
                {email, password}
            )

            if(post.data.success) {
                console.log(post)
            }

        } catch (error) {
            console.error(error)
        }
    }
    

  return (
    <>
        <div className="flex bg-[#f8f5f5] justify-center items-center min-h-screen">
            <div className="p-5 w-100 bg-white flex flex-col justify-center items-center lg:flex-row lg:gap-6 lg:w-fit">
                <div>
                    <h2 className="font-bold text-xl mb-5">Signin</h2>
                    <img src={signin} alt="" />
                </div>
                <form action="" className="w-full" onSubmit={handleSubmit}>
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
                            className="p-3 bg-[#e9eff1] w-full rounded-md outline-none mb-5"
                            required
                            autoComplete="new-password"
                        />
                    </div>
                             <button className="bg-blue-500 text-white w-full p-4 mb-4 cursor-pointer">Sign in</button>

                    <p className="text-center">Already have an account? <Link to={'/signup'}>Sign Up</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signin