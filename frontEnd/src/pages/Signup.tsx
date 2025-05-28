import axios from "axios"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

function Signup() {

    // const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log(name, email, password)

        try {
            const post = await axios.post('http://localhost:8080/api/auth/register')

            if(post.data.success) {
            }
    
        } catch (error) {
            console.error(error)
        }

    }

  return (
    <>
        <div className="min-h-screen flex justify-center items-center bg-[#f8f5f5]">
            <div className="p-5 bg-white w-80">
                <h2 className="capitalize font-bold text-xl mb-5">signin</h2>                    
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
                            onChange={(e) => setEmail(e.target.value)}
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
                        <select name="selection" id="selection" className="p-3 mb-5 w-full bg-[#e9eff1]">
                            <option value="doctor">Doctor</option>
                            <option value="doctor">User</option>
                        </select>
                    </div>

                    <button className="bg-blue-500 text-white w-full p-4 mb-4 cursor-pointer">Sign up</button>

                    <p className="text-center">Already have an account? Sign In</p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup