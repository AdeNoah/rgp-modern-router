import { Links } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <div>
                404 - Page Not Found

                <Link to="/">Home</Link>
            </div>
        </div>
  )
}

