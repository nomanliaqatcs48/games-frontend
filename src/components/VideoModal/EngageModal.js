import React, { Component } from 'react'
import { Box } from '@mui/system';
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player';
import Videomodal from "../../images/videoModal.svg";
import '../home/VideoModal.scss';


export default class EnagageModal extends Component {
    state = {
        open: false
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
  render() {
    const { open } = this.state;
    return (
      <Box sx={{
        display:'flex',
            justifyContent:'center',
            alignItems:'center',
      }}>
        <img className="videoImage" src={Videomodal} alt="" onClick={this.onOpenModal}/>
        <Modal open={open} onClose={this.onCloseModal}
        styles={{
            modal: {
              width: "80%",
              height:'80%',
              padding: "unset",
            },
            overlay: {
              background: "rgba(0, 0, 0, 0.5)"
            },
            closeButton: {
              background: "white",
            }
          }}
          center>
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='98%'/>
        </Modal>
      </Box>
    );
  }
}
