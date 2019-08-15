import React, { Component } from 'react';
import Weather from './Weather';

export class Index extends Component {
  render() {
    return (
      <header id='wrapper'>
        <div id='bg' />
        <div id='overlay' />
        <header id='main'>
          <header id='header'>
            <h1>Lattrell Sapon</h1>
            <p>Web Developer</p>
            <nav>
              <ul>
                <li>
                  <a
                    href='https://www.instagram.com/lattrellwebdesign/'
                    target='_blank'
                    class='icon brands fa-instagram'
                  >
                    <span class='label'>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/Treezy-Web-Design-374311436556053/?modal=admin_todo_tour'
                    target='_blank'
                    class='icon brands fa-facebook-f'
                  >
                    <span class='label'>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
                    target='_blank'
                    class='icon brands fa-linkedin'
                  >
                    <span class='label'>Linked In</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/lattrellsapon'
                    target='_blank'
                    class='icon brands fa-github'
                  >
                    <span class='label'>Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:lattrellsapon@gmail.com'
                    class='icon solid fa-envelope'
                  >
                    <span class='label'>Email</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className='weather-component'>
              <Weather />
            </div>
          </header>

          <footer id='footer'>
            <span class='copyright'>
              &copy; Untitled. Design: <a href='http://html5up.net'>HTML5 UP</a>
              .
            </span>
          </footer>
        </header>
      </header>
    );
  }
}

export default Index;
