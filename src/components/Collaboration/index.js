import React from "react";
import { Container, Typography,Button, Box } from "@mui/material";
import Chat from "../../Assets/images/chat.svg";
import OneOnOne from "../../Assets/images/1on1.svg";
import Notification from "../../Assets/images/notification.svg";
import Sharing from "../../Assets/images/sharing.svg";
import Workspace from "../../Assets/images/workspace.svg";
import square from "../../Assets/images/square.svg";
import LeftImage from "../../Assets/images/featureleft.svg";
import RightImage from "../../Assets/images/featureright.png";
import axios from "axios";
import { useState } from "react";
// Styles
import * as styles from "../Collaboration/styles.module.scss";

// Components
import Card from "../Card";
import Productivity from "../Productivity";

const Collaboration = () => {

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://st-backend-invochat.invo.zone/api/messages`, {
                data: { Email: email },
            })
            .then((res) => {
                setErrors("Successfully submitted");
                setEmail('')
                if (res.status === 200) {
                } else {
                }
            })
            .catch((error) => {
                setErrors("Invalid Email");
            });
    };

    return (
        <>
            <div className={styles.collabContainer}>
                <img loading="lazy" src={LeftImage} alt="" className={styles.featureLeft} />
                <Container>
                    <Box className={styles.headText}>
                    <Typography align="center" px={3} variant="h1">
                        Secure and user-friendly features for project collaboration at your disposal{" "}
                    </Typography>
                    </Box>
                    <Typography align="center" py={2} className={styles.descText}>
                        Chat with your team, manage notifications, securely share and upload files, and manage <br /> and track multiple projects asynchronously through InvoChat.
                    </Typography>
                    <Box className={styles.inputWrapper}>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" className={styles.inputField} />
                        <Button onClick={onSubmit} className={styles.signUpbtn}>Sign up for free</Button>
                    </Box>
                    <Typography
                                sx={{
                                    "& p": {
                                        textAlign: "center",
                                        fontSize: "18px",
                                        color: errors === "Invalid Email" ? "red" : errors === "Successfully submitted" ? "green" : "",
                                        fontWeight: "600",
                                    },
                                }}
                            >
                                {errors && <p>{errors}</p>}
                            </Typography>
                    <Typography py={2} align="center" className={styles.autoText}>
                        Already have an account?<span>Sign in</span>
                    </Typography>
                    <Box className={styles.headText}>
                    <Typography align="center" px={3} variant="h2">
                        Bring global teams together through an all-
                        <br />
                        in-one platform{" "}
                    </Typography>
                    </Box>
                    <Box className={styles.flexWrap}>
                        <img loading="lazy" src={square} alt="" className={styles.square} />
                        <Card
                            icon={Chat}
                            heading={"Topic-specific chat rooms "}
                            description={
                                "Bring down email clutter and messy chats with dedicated chat rooms and threads around projects, topics, and teams. Public and private chat rooms bring teams together for a robust dialogue or just spitballing creative ideas."
                            }
                        />
                        <Card
                            icon={Sharing}
                            heading={"Instant file-sharing "}
                            description={
                                "Easily upload files of any type into InvoChat — JPEG, PNG, PDF, MP3, Word, Excel, PowerPoint, and more. Make them instantly available to your team members, and drop the headache of tedious email attachments."
                            }
                        />
                        <Card icon={Notification} heading={"Personalized notifications "} description={"With InvoChat, you can apply custom notification preferences to every conversation so that you can stay focused and in the loop."} />
                    </Box>
                    <Box py={2} className={styles.flexWrap2}>
                        <img loading="lazy" src={square} alt="" className={styles.square} />
                        <Card
                            icon={OneOnOne}
                            heading={"1:1 chat "}
                            description={
                                "Quicker and more efficient communication leads to higher productivity. Instant messaging allows you to better communicate with your entire team in real-time without any delays. No more texting, email, or phone calls."
                            }
                        />
                        <Card
                            icon={Workspace}
                            heading={"Collaborative workspaces"}
                            description={
                                "InvoChat workspaces offer a single most centralized platform for companies and their employees who require constant collaboration and communication with clients and each other on projects and tasks."
                            }
                        />
                    </Box>
                </Container>
                <img loading="lazy" src={RightImage} alt="" className={styles.featureRight} />
            </div>
            <Productivity />
        </>
    );
};

export default Collaboration;
