import './Login.css';

const Login = () => {
    return (
        <div className="div bg-light d-flex align-items-center justify-content-center vh-100 login-background">
            <div className="card shadow-lg w-100" style={{maxWidth: '480px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title">Sign in</h1>
                        <p className="card-text text-muted">
                            Sign in below to access your account
                        </p>
                    </div>

                    <div className="mt-4">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-muted">
                                    Email address
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;