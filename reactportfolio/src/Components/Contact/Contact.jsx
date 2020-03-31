import React, { Component } from 'react';
//import { form, form-group, Input, Label, Button } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({ [ e.target.name]: e.target.value })
    }

   async handleSubmit(e) {
       this.setState({ 
           [e.preventDefault()]: e.target.value
        })

        const { name, email, message} = this.state

        const form = await axios.post('api/form', {
            name,
            email,
            message
        })
        e.preventDefault()
        console.log(form)
    }
    
    render() {
        return (
            <form className="justify-content-center contact text-white mx-auto mt-5 px-auto" onSubmit={this.handleSubmit} style={{ width: "50%", display: "inline !important"}}>
            <div className="text-center font-weight-bold form-group">
                <label className="control-label col-sm-4" htmlFor="name"></label>
                <input className='form-control mb-4 text-center'
                    type='text'
                    name="name"
                    placeholder="Your Name"
                    onChange={this.handleChange} />
            </div>

            <div className="text-center font-weight-bold form-group">
                <label className="control-label col-sm-4" htmlFor="email"></label>
                <input className='form-control mb-4 text-center'
                    type='email'
                    name="email"
                    placeholder="Email Address"
                    onChange={this.handleChange} />
            </div>

            <div className="text-center font-weight-bold form-group">
                <label className="control-label col-sm-4" htmlFor="message"></label>
                <textarea rows="5" className='form-control rounded-0 text-center'
                    type='textarea'
                    name="message"
                    placeholder="Write your message to me"
                    onChange={this.handleChange} />
            </div>

        <button className="btn btn-dark btn-block control-label col-sm-4 mx-auto">
            SUBMIT
        </button>

        </form>

    )
}
}

export default Contact;


// const Contact = () => {
//     const [inputEmail, setInputEmail] = useState("");
//     const [historyList, setHistoryList] = useState([]);
//     return (
//         <Container fluid>
//             <div className="text-center">
//                 <input onChange={e => {
//                         setInputEmail(e.target.value)
//                         setHistoryList([...historyList, e.target.value])
//                     }}
//                     placeholder="enter email"
//                 />
//                 <br />
//                 {inputEmail}
//                 <hr />
//                 <br />
//                 <ul>
//                     {historyList.map(rec=> {
//                         return (
//                             <div className="echo">
//                                 {rec}
//                             </div>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </Container>
//     )
// }
// export default Contact;
