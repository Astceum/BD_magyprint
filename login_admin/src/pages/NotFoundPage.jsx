import { useAuth } from "../context/AuthContext"


function NotFoundPage() {

    const { user } = useAuth()
    console.log(user)

    return (
        <div><h1>No Found</h1></div>
    )
}

export default NotFoundPage