import logo from './logo.svg'

function Header(){
    return(
            <header>
                <img src={logo} width="40px" alt="Logo" />
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