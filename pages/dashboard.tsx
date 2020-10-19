import getCookies from './../utils/getCookies'

import Dash from '../components/Dashboard';

function Dashboard() {
  return (
    <>
      <Dash />
    </>
  );
}

Dashboard.getInitialProps = async ctx => {
  const cookies = getCookies(ctx.req.headers.cookie);
  if(!cookies.token){
    ctx.res.writeHead(302, { Location: "/login" }).end();

  }
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Dashboard;
