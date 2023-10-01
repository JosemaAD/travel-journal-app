import logo from '../assets/logo.png'
export default function Header(){
    return(
        <nav>
            <img className='nav--logo' src={logo} />
        </nav>
    )
}