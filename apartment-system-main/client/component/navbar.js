import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();

    if (session){
        return (
            <header className="header">
                <img
                    src='image/iiita_logo.png'
                    className="header--image"
                />
                <h2 className="header--title"><a href="/">Apt-System</a></h2>
                <h4 className="header--project1"><a href="/">Home</a></h4>
                <h4 className="header--project2"><a href="/my-order">MyOrder</a></h4>
                <h4 className="header--project2"><a href="/">MyPropertyActivity</a></h4>
                <h4 className="header--project7"><a href="/contact">Contact Us</a></h4>
                <h4 className="header--project7"><a href="/profile"><img className="rounded-circle" src={session.user.image}  width="150" alt='not found' ></img></a></h4>
            </header>
        );
    } else {
        return (
            <header className="header">
                <img
                    src='image/iiita_logo.png'
                    className="header--image"
                />
                <h2 className="header--title"><a href="/">Apt-System</a></h2>
                <h4 className="header--project1"><a href="/">Home</a></h4>

                <h4 className="header--project2"><a href="/my-order">MyOrder</a></h4>
                <h4 className="header--project2"><a href="/">MyPropertyActivity</a></h4>
                <h4 className="header--project7"><a href="/contact">Contact Us</a></h4>
                <h4 className="header--project7"><a href="/profile"><img  className="rounded-circle" src="https://www.pngkey.com/png/detail/202-2024792_profile-icon-png.png" width="150" alt="not found"></img></a></h4>
            </header>
        );
    }
}