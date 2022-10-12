import React from "react";
import { Grid, Typography, Button, CardActionArea } from "@mui/material";
import { Link } from "gatsby";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as styles from "../../components/Blog/Blog.module.scss";

const Blog = (props) => {
    
    return (
        <>
            <Grid item xs={12} md={6} lg={props.customClass ? "12" : "4"} className={`${styles.blog} ${props.customClass ? styles.firstBlog : ""}`} sx={{ pt: 8 }}>
                <Card sx={{ boxShadow: 0 }}>
                    <CardActionArea className={`${styles.card} ${styles.flexClass}`}>
                        <CardMedia className={props.customClass ? styles.customImg : ""} component="img" src={props.blog?.Image[0].url} />
                        <CardContent sx={{ pl: 0 }} className={`${styles.card_body_2} ${styles.card_body_1} ${styles.card_body} ${props.customClass ? styles.margin_left : ""}`}>
                            <Typography className={`${styles.three_heading} ${props.customClass ? styles.zero_heading : ""}`} sx={{ py: 1 }} gutterBottom variant="h6">
                                {props?.blog?.Title}
                            </Typography>
                            <Typography variant="h1">{props.blog?.Content.substring(0, 100)}</Typography>
                            <Link to={`/blog/${props?.blog?.Slug}`}>
                                <Button className={`${styles.card_btn} ${props.customClass ? styles.firstBtn : ""}`} sx={{ pl: 0 }}>
                                    View more
                                </Button>
                            </Link>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default Blog;
