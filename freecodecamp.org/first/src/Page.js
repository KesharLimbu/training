// import logo from './logo.svg'
import './Page.css'
function Header(){
    return(
        <header>
            <img src="/logo192.png" width="40px" alt="Logo" />
            <nav className="header">
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Main(){
    return(
        <main>
        <h1>I am excited to learn React</h1>
        <ol>
            <li>React is a popular library, so I will be able to fit in with all the coolest devs out there!</li>
            <li>I am more likely to get a job as a front end developer if I know React</li>
        </ol>
    </main>
    )
}

function Footer(){
    return(
        <footer>
            <small>@ 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )

}
    
function Page(){
    return(
       <>  
            <Header />
            <Main />
            <Footer/>
      </>
    )
}

export default Page;
