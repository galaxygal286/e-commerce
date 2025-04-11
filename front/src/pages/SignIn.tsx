import { Link } from "react-router";
import Footer from "../components/Footer"
import Input from "../components/Input"
import Navbar from "../components/Navbar"
import { useFormik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
});

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return <>
        <div className="flex flex-col min-h-screen">

            <div className="flex-grow">
                <Navbar />
                <main className="max-w-[1100px] mx-auto px-5 py-6">
                    <div className="shadow-xl border border-gray-100 rounded p-4 max-w-100 mx-auto">
                        <h2 className="text-center text-xl font-medium text-gray-700 mb-5">Sign in to your account</h2>
                        <form className="mb-4 space-y-5" onSubmit={formik.handleSubmit}>
                            <div>
                                <Input
                                    type="text"
                                    label="Email Address"
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    touched={formik.touched.email}
                                    error={formik.errors.email}
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    label="Password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    touched={formik.touched.password}
                                    error={formik.errors.password}
                                />
                            </div>
                            <p className="text-right"><Link className="text-sm font-semibold text-blue-600 hover:text-blue-500" to="forgot-password">Forgot Password?</Link></p>
                            <button className="cursor-pointer flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500">Sign in</button>
                        </form>
                        <p className="text-center">Not a member? <Link className="text-sm font-semibold text-blue-600 hover:text-blue-500" to="/signup">Sign Up</Link></p>
                    </div>
                </main>
            </div>
        </div>
        <Footer />
    </>
}

export default SignIn