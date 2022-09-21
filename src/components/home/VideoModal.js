import React from "react"
import { Container, Typography, Button, Box } from "@mui/material"
import {Link} from 'gatsby';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EnagageModal from "../VideoModal/EngageModal";
import '../home/VideoModal.scss';

class VideoModal extends React.Component {
render(){
  return (
    <section className="modalBack">
      <Container>
        <Box className="modal-wrapper">
          <Box className="modal-content">
            <Typography variant="h2">
              Make Customer Engagement More<br/>Interactive with InvoCom
            </Typography>
            <Typography variant="h6">
              Helping your customer service to monitor how customers<br/>engage with your website and offer targeted solutions.
            </Typography>
          </Box>
          <Box className="video-wrapper">
            <EnagageModal/>
          </Box>
          <Box>
            <Link to="#">
                <Button className="modal-btn">
                    Book a free demo call with our experts
              <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
                </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </section>
  )
}
}

export default VideoModal;
