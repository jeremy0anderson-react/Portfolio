import {Component} from 'react';
import {Box, Button, Card, FormControl, TextField, Typography} from "@mui/material";
import {init, send} from 'emailjs-com';
const serviceID="service_m39dxxm";
const templateID="template_1hx0gvs";
const publicKey="Mmct4HTh_4NTqM50n";
class Contact extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            emailJSResponse: ""
        }
        //bindings
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if ( this.state !== nextState || this.props !== nextProps || this.context !== nextContext) {
            return true;
        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }
    componentWillUnmount() {

    }


    handleNameChange(e){
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }
    handleSubjectChange(e){
        this.setState({
            ...this.state,
            subject: e.target.value
        })
    }
    handleMessageChange(e){
        this.setState({
            ...this.state,
            message: e.target.value,
        })
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        init();
        await send(serviceID, templateID, {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }, publicKey)
            .then((res)=>{
                if (res.status === 200 || res.text === "OK"){
                    this.setState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        emailJSResponse: "Message Sent"
                    });
                } else {
                    this.setState({
                        ...this.state,
                        emailJSResponse: "Message could not be sent"
                    });
                }
            })
    }


    render(){
        return(
            <Card
                sx={{padding: "10px", width: {xs: "90vw", sm: "90vw", md: "70vw", lg: "40vw"}, alignItems:"center"}}
            >
                <Box
                    sx={{display: "flex", mx: 4, my: 3, mb: 8}}
                >
                    <Typography
                        variant={"h4"}
                    >
                        Contact
                    </Typography>
                </Box>
                <Box id={"Contact-form-container"}>
                    <form onSubmit={this.handleSubmit}>
                        <Box
                            sx={{width: "100%", display: "flex", justifyContent:"space-between"}}
                        >
                            <FormControl>
                                <TextField
                                    label={"Name"}
                                    name={"name"}
                                    onChange={this.handleNameChange}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label={"Email"}
                                    name={"email"}
                                    onChange={this.handleEmailChange}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label={"Subject"}
                                    name={"subject"}
                                    onChange={this.handleSubjectChange}
                                />
                            </FormControl>
                        </Box>
                        <Box
                            sx={{display: "flex", width: "100%", my: 5}}
                        >
                            <FormControl
                                sx={{width: "100%", display: "flex"}}
                            >
                                <TextField
                                    label={"Message"}
                                    name={"message"}
                                    multiline={true}
                                    minRows={2}
                                    maxRows={5}
                                    onChange={this.handleMessageChange}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <Typography variant={"caption"}>
                                {this.state.emailJSResponse}
                            </Typography>
                        </Box>
                        <Box
                            sx={{display: "flex", justifyContent:"right"}}
                        >
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                                type={"submit"}
                            >
                                Send
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Card>
        )
    }
}
export default Contact;