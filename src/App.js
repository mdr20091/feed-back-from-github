import React from "react";
import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <Fragment className="App">
        <NavBar title="Github finder" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUser}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
