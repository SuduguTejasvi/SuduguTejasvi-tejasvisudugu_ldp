import React, { useEffect } from "react";
import { CustomBox } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { moneyimg, mainHeading, subHeading1, subHeading2 } from "../../../utils/constants";
import Hometitle from "../../molecules/HomeTittleArea";

const Home: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            await loginWithRedirect({
                authorizationParams: {
                    connection: 'google-oauth2',
                    screen_hint: 'login',
                    redirect_uri: 'http://localhost:3002',
                },
            });
        } catch (error) {
            console.error("Google authentication error:", error);
        }
    };

    const loginWithLinkedin = async () => {
        try {
            console.log("Entered login try block");
            await loginWithRedirect({
                authorizationParams: {
                    connection: 'linkedin',
                    screen_hint: 'login',
                    redirect_uri: 'http://localhost:3002',
                },
            });
            console.log("Exited login try block");
        } catch (error) {
            console.error("LinkedIn authentication error:", error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    return (
        <CustomBox>
            <Hometitle 
                mainheading={mainHeading} 
                moneyicon={moneyimg} 
                subheading1={subHeading1} 
                subheading2={subHeading2} 
                buttonvariant="contained" 
                handleGoogleSignIn={loginWithGoogle} 
                googleButtonLabel="Sign in with Google" 
                githubButtonLabel="Sign in with Linkedin" 
                handleGithubSignIn={loginWithLinkedin}
            />
        </CustomBox>
    );
};

export default Home;
