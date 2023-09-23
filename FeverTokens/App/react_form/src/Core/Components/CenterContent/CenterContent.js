import React, { Component } from "react";
import axios from "axios"

class CenterContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            about: ""
        }
    }


    setAttribute = (e) => {
        console.log(e.target.value.name)
        switch (e.target.name) {
            case "firstname": this.setState({ firstname: e.target.value }); break;
            case "lastname": this.setState({ lastname: e.target.value }); break;
            case "email": this.setState({ email: e.target.value }); break;
            case "about": this.setState({ about: e.target.value }); break;
            case "cv": this.state.field.cycle = JSON.parse(e.target.value); break
        }
    }

    saveInfos = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3000/condidate", this.state).then((res) => {
            alert("the informations was saved!: " + res.data)
        }).catch((err) => {
            console.log("Error :\n" + err)
        })
    }

    render() {
        return (
            <div className="col-md-4 offset-md-4 mt-5">
                <form onSubmit={this.saveInfos}>
                    <input className="form-control mb-2" name="firstname" onChange={this.setAttribute} placeholder="First name" />

                    <input className="form-control mb-2" name="lastname" onChange={this.setAttribute} placeholder="Last name" />

                    <input className="form-control mb-2" name="email" onChange={this.setAttribute} placeholder="Email" />

                    <textarea className="form-control mb-2" name="about" onChange={this.setAttribute} placeholder="About you"></textarea>

                    <input type="file" className="file-input form-control mb-2" name="" onChange={this.setAttribute}></input>
                    <button className="btn my-btn col-md-12 mt-2" type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default CenterContent