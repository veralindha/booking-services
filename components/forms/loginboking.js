import Link from 'next/link'
import React from 'react'

export default function LoginBoking() {
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Login Admin</h3>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                    </div>
                                    <Link href='/'>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
