import './Footer.css'
import { BsPhone } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='footer'>
        <img
            className="logo"
            src="https://www.merrjep.com/Content/Images/Kosovo/Kosovo.svg"
            alt="merrjep"
            width={200}
          />
        <div className='footer-middle'>
            <p className='footer-middle-roboto'>MERRJEP.COM N.SH.T</p>
            <p className='footer-middle-address'>Sheshi Nëna Terezë, Obj.31, Hyrja 1, Banesa Nr. 11</p>
        </div>
        <div className='footer-end'>
            
            <BsPhone className='footer-phone'/>
            <div className='footer-phone-numbers'>
                <p>+383 (0) 38 742 682</p>
                <p>+383 (0) 49 956 312</p>
            </div>
        </div>
    </footer>
  )
}
