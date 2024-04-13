import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ maxWidth: "32rem", margin: "auto", display: "flex", flexDirection: "column", gap: "0.75rem", textAlign: "center" }}>
                <h3 style={{ color: "#4F46E5", fontWeight: "600" }}>
                    404 Error
                </h3>
                <p style={{ color: "#1F2937", fontSize: "2.25rem", fontWeight: "600", margin: "0.5rem 0" }}>
                    Page not found
                </p>
                <p style={{ color: "#4B5563", margin: "0.5rem 0" }}>
                    Sorry, the page you are looking for could not be found or has been removed.
                </p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                    <button onClick={() => window.history.back()} style={{ padding: "0.6rem 1.1rem", cursor: 'pointer', color: "#FFF", fontWeight: "500", backgroundColor: "#4F46E5", borderRadius: "0.375rem", transition: "background-color 0.15s ease-in-out", border: 0 }}>
                        Go back
                    </button>
                    <Link to="/contactus" style={{ textDecoration: "none", padding: "0.5rem 1rem", color: "#4B5563", fontWeight: "500", backgroundColor: "#FFF", borderRadius: "0.375rem", transition: "background-color 0.15s ease-in-out", border: "1px solid #CBD5E0" }}>
                        Contact support
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage;
