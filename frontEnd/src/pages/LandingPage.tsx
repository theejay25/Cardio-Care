import axios from "axios"
import { useEffect } from "react"

function LandingPage() {

  useEffect(() => {

    const fetchData = async () => {

      try{

      const response = await axios.get('http://localhost:8080/fruits');
      
      console.log(response)

      } catch (error) {
        console.error('error message:', error)
      }

    }

    fetchData()

  }, [])

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage