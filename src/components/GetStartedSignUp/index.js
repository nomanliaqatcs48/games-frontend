import React from "react";

// Library
import { Container, Typography, Button, Box } from "@mui/material";

// Assets
import LeftImage from "../../Assets/images/featureleft.svg";
import RightImage from "../../Assets/images/featureright.png";
import Seperator from "../../Assets/images/or.svg";

// Styles
import * as styles from "../GetStartedSignUp/styles.module.scss";

// Components

const GetStartedSignUp = () => {
    return (
        <>
            <div className={styles.signupContainer}>
                <img loading="lazy" src={LeftImage} alt="" className={styles.featureLeft} />
                <Container>
                    <Box className={styles.signupCard}>
                        <Typography pb={2} className={styles.headText}>
                            Get Started
                        </Typography>
                        <Typography pb={2} className={styles.desc}>
                            A InvoChat Workspace is a place for InvoChat teams
                            <br /> to collaborate in real-time through messaging, file
                            <br /> sharing, video calling and more.
                        </Typography>
                        <Typography pb={3} className={styles.desc}>
                            Are you looking to join an existing Workspace or create a<br /> new one?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <Button className={styles.workspaceBtn}>Create a New Workspace</Button>
                        </Box>
                        <Typography pt={1} align="center" className={styles.desc}>
                            Set up your Workspace on InvoChat
                        </Typography>
                        <Box py={5} display="flex" justifyContent="center">
                            <img loading="lazy" width="100%" src={Seperator} alt="" />
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Button className={styles.findBtn}>Find Your Workspace</Button>
                        </Box>
                        <Typography pt={1} pb={3} align="center" className={styles.desc}>
                            Join or sign in to an existing Workspace
                        </Typography>
                        <Typography pb={1} className={styles.headText}>
                            Your Workspaces
                        </Typography>
                        <Typography pb={1} className={styles.desc}>
                            You are a member of these InvoChat workspaces:
                        </Typography>
                        <Box className={styles.inputLaunchWrapper}>
                            <input type="text" placeholder="InvoZone Pvt. Ltd." className={styles.launchInput} />
                            <Button className={styles.launchBtn}>Launch</Button>
                        </Box>
                        <Typography py={4} className={styles.desc}>
                            If you are looking for a different workspace, you can
                            <br /> try a different email address or request an invitation
                            <br /> from your workspace administrator.
                        </Typography>
                    </Box>
                </Container>
                <img loading="lazy" src={RightImage} alt="" className={styles.featureRight} />
            </div>
        </>
    );
};

export default GetStartedSignUp;
