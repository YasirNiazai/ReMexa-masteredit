import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import $ from "jquery";
import Popper from "popper.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import TransferForm from "./TransferForm";
import Spacer from "react-add-space";
import WithdrawForm from "./WithdrawForm";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      balance: 0
    };
  }
  async componentWillMount() {
    const res = await axios.get("auth/current_user");
    const user = res.data;
    if (!user) {
      console.log("redirecting");
      this.props.history.push("/");
    }
    if (user.username === "GOD") {
      this.props.history.push("/GOD");
    }
    this.setState({ username: user.username, balance: user.balance });
  }

  showTrans = () => {
    //here button handling
    document.getElementById("transfer").style.display = "block";
    document.getElementById("form").style.display = "block";
  };

  showWith = () => {
    //here button handling
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("form").style.display = "block";
  };

  render() {
    return (

<section class="forms-section">
<h1 class="section-title">Ovex-IR</h1>
 <div class="forms">
      <form class="form form-login">

        <h1 align="center" id="prompt">
          Hello,{this.state.username}!
        </h1>
        <Spacer amount={1} />
        <p align="center" id="mssg">
          Your current balance is OVX: {this.state.balance}
        </p>




        <Spacer amount={8} />

        <button
          type="button"
          className=".login100-form-btn "
          onClick={this.showTrans} >
            Transfer Money
        </button>


                <Spacer amount={2} />

        <button
          type="button"
          className=".login100-form-btn"
          onClick={this.showWith} >
          Withdraw
        </button>


        <Spacer amount={1} />

        <a href="auth/logout" type="button"  className=".login100-form-btn">
          logout
        </a>
        <Spacer amount={8} />

        <TransferForm />


       <WithdrawForm />


      </form>
</div>

</section>

    );
  }
}

export default MainPage;
