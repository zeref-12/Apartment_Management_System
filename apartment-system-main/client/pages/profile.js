import Axios, * as others from 'axios';
import { Button } from "../component/button";
import Navbar from "../component/navbar";
import { signIn, signOut, useSession, getSession } from 'next-auth/react';


export default function profile({ session }) {

  // console.log(session.user.image);
  // console.log(user);
  // console.log(project);

  if (session) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="box">
            <img src={session.user.image} alt="" />
            <ul>
              <li>{session.user.name}</li>
              <li>{session.user.email}</li>
              <li>Age: 20</li>
              <li><Button
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >SignOut
              </Button></li>
              <li><Button
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >ListYourProperty
              </Button></li>
            </ul>
          </div>

          <div className="About">
              <ul>
                <h2>Your Listed Property</h2>
                <li>Property 1</li>
              </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="box">
            <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="" />
            <ul>
              <li>Name</li>
              <li>Mail</li>
              <li>age</li>
              <li><Button
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >SignIn
              </Button></li>
            </ul>
          </div>

          <div className="About">
            <ul>
              <h1>about</h1>
            </ul>
            <ul>
              <h3>Address</h3>
              <li>IIIT ALLAHABAD</li>
            </ul>
            <ul>
              <h3>My Recent Projects</h3>
              <li>Project 1</li>
              <li>Project 2</li>
            </ul>
            <ul>
              <h3>More Info</h3>
              
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export async function getServerSideProps(context) {

  const session = await getSession(context);
  return {
    props: {
      session: session
    }
  }
}
