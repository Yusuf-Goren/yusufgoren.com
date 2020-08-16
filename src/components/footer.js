import React, {Component} from 'react';
import '../css/footer.css';
class Footer extends Component {
    render() {
        return(
            <div>
              <footer className='social-links'>
              <a href='http://linkedin.com/in/yusuf-gören' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-linkedin-in' id='linkedin'  aria-hidden='true' />
              </a>
              <a href='https://github.com/yusuf-goren' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-github' id='github' aria-hidden='true' />
              </a>
              <a href='https://twitter.com/yusufgoren14' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-twitter' id='twitter'  aria-hidden='true' />
              </a>
              </footer>
            </div>
       )
    }
}

export default Footer;
