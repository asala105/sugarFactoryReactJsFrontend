import img from "../images/couple2.png";
import loglogin from "../images/Loglogin.png";
import loginclass from '../Pages/Login.module.css';



function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 login-section-wrapper">
                    <div className="brand-wrapper">
                        <img src={loglogin} alt="logo" className="logo" />
                    </div>
                    <div className="login-wrapper my-auto">
                        <h1 className="login-title">Log in</h1>
                        <form action="#!">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your passsword"
                                />
                            </div>
                            <input
                                name="login"
                                id="login"
                                className="btn btn-block login-btn"
                                type="button"
                                defaultValue="Login"
                            />
                        </form>
                        
                    </div>
                </div>
                <div className="col-lg-6 px-0 d-none d-sm-block">
                    <img
                        src={img}
                        alt="login image"
                        className="login-img"
                    />
                </div>
            </div>
        </div>
    );
}
// function Login(){
//     return (
//         <div>
//             <h1 className ={loginclass.head1}>Header</h1>
//         </div>
//     )
// }


export default Login;