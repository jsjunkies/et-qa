import React, { Component } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@material-ui/core';

class Guideline321 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false
        }
    }
    showDialog = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        })
    }
    render() {
        return (
            <div>
                <h2>User Form</h2>
                <form action="javascript:void(0)">
                    Enter your First Name:
                    <input
                        name="firstname"
                        type="text"
                        placeholder="Enter your First Name"
                        onFocus={this.showDialog} />
                    <br />
                    Enter your Last Name:
                    <input name="lastname" type="text" placeholder="Enter your Last Name" />
                    <br />
                    <input type="submit" />
                </form>
                {this.state.isShowModal &&
                    <Dialog
                        open={true}
                        onClose={this.showDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">{"Title"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Enter Your firstname in the input box
                            </DialogContentText>
                            <br></br>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.showDialog} color="primary" >
                                Close
                    </Button>
                        </DialogActions>
                    </Dialog>
                }
            </div>
        );
    }
}

export default Guideline321;
