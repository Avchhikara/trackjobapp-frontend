import { Layout, Menu, Breadcrumb, Button, message } from "antd";
import Link from 'next/link';
import Cookies from 'js-cookie';
import Router from "next/router";

const { Header, Content, Footer } = Layout;

export default () => {
  const token = Cookies.get("token");

  function handleClick() {
    if(token) {
      Cookies.remove("token");
      Router.push("/");
      // Also sending a message
      message.success("Logout successfull! See you later :)");
    }
    else {
      Router.push("/register");
    }
  }


  return (
    <Header className="header">
      <div className="logo">Track job applications</div>
      <div className="header-right">
        {
          token ? (
            <Button
            type="primary"
            onClick={handleClick}>Logout</Button>
          ): (
            <>
              <Link href="/login">
                <a>Login</a>
              </Link>

              <Button type="primary" onClick={handleClick}>Register</Button>
            </>
          )
        }
      </div>
    </Header>
  );
};

