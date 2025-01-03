import { Routes, Route, Navigate } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import SignIn from "../pages/Authentication/Login/SignIn";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import ApplicantSignUp from "../pages/Authentication/SignUp/ApplicantSignUp";
import EmployerSignUp from "../pages/Authentication/SignUp/EmployerSignUp";
import ApplicantSignIn from "../pages/Authentication/Login/ApplicantSignIn";
import EmployerSignIn from "../pages/Authentication/Login/EmployerSignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashHome from "../pages/Dashboard/DashHome";
import AllUser from "../pages/Dashboard/AllUser";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                {/* Add nested routes here */}
                <Route path="/" element={<Home></Home>}></Route>
            </Route>

            <Route path="/signIn" element={<SignIn></SignIn>}>
                <Route
                    index
                    element={<Navigate to="applicant-signin" replace />}
                />
                <Route path="/signIn/applicant-signin" element={<ApplicantSignIn></ApplicantSignIn>}></Route>
                <Route path="employer-signIn" element={<EmployerSignIn></EmployerSignIn>}></Route>
            </Route>

            <Route path="/signUp" element={<SignUp></SignUp>}>
                <Route
                    index
                    element={<Navigate to="applicant-signup" replace />}
                />
                <Route path="/signUp/applicant-signup" element={<ApplicantSignUp></ApplicantSignUp>}></Route>
                <Route path="employer-signup" element={<EmployerSignUp></EmployerSignUp>}></Route>
            </Route>

            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route
                    index
                    element={<Navigate to="dash-home" replace />}
                />
                <Route path="/dashboard/dash-home" element={<DashHome></DashHome>}></Route>
                <Route path="all-user" element={<AllUser></AllUser>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    )
}

export default AppRoutes
