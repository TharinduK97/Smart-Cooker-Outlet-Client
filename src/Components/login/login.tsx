function Login() {
    return (
        <div className="container mx-auto ">

            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-3 col-span-2 ...">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="username" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login