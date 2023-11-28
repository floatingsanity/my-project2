import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyProject2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  :host {
    display: block;
  }

  :host .custom-button-blue.hovered {
    background-color: #ccf0ff;
    color: #001E44;
    border: 2px solid #ccf0ff;
    text-decoration: none;
  }

  :host .custom-button-white.hovered {
    background-color: #1E407C;
    color: #fff;
    text-decoration: none;
  }

  :host .custom-button-gray.hovered {
    background-color: #5a7e9c;
    text-decoration: none;
  }
  .custom-button-blue,
  .custom-button-white,
  .custom-button-gray {
    width: 90%;
    padding: 16px;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin-top: 0;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    display: block;
    margin: 20px auto;
    margin-bottom: 30px;
    text-decoration: none;
  }

  .custom-button-blue {
    background-color: #001E44;
    color: #ccf0ff;
    border: 2px solid #ccf0ff;
  }

  .custom-button-white {
    background-color: #fff;
    border: 2px solid #1E407C;
    color: #1E407C;
  }

  .custom-button-gray {
    background-color: #5a7e9c;
    color: #fff;
    border: 2px solid #fff;
  }

  .button-container {
      padding: 90px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .gray-container {
      background-color: #f2f2f2;
      width: 60%;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
      margin-top: 0%;
      margin-left: -7%
    }

    .white-container {
      background-color: #f2f2f2;
      width: 60%;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
      margin-top: -20%;
      margin-left: -7%
    }

    .blue-container {
      background-color: #001E44;
      width: 60%;
      padding: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
`;

firstUpdated() {
  super.firstUpdated();

  const blueButton = this.shadowRoot.getElementById('myButtonBlue');
  const whiteButton = this.shadowRoot.getElementById('myButtonWhite');
  const grayButton = this.shadowRoot.querySelector('.custom-button-gray');

  blueButton.addEventListener('mouseenter', () => this.addHoverStyles(blueButton));
  blueButton.addEventListener('mouseleave', () => this.removeHoverStyles(blueButton));

  whiteButton.addEventListener('mouseenter', () => this.addHoverStyles(whiteButton));
  whiteButton.addEventListener('mouseleave', () => this.removeHoverStyles(whiteButton));

  grayButton.addEventListener('mouseenter', () => this.addHoverStyles(grayButton));
  grayButton.addEventListener('mouseleave', () => this.removeHoverStyles(grayButton));
}

addHoverStyles(element) {
  if (!element.classList.contains('hovered')) {
    element.classList.add('hovered');
  }
}

removeHoverStyles(element) {
  element.classList.remove('hovered');
}

render() {
  return html`
    <main>
      <div class="blue-section">
        <div class="blue-container">
          <p>Get the news by email</p>
          <a href="https://headlines.psu.edu" class="custom-button-blue" id="myButtonBlue">DISCOVER NEWS ></a>
        </div>
      </div>

      <div class="button-container">
        <div class="white-container">
          <p>Get the news by email</p>
          <a href="https://headlines.psu.edu" class="custom-button-white" id="myButtonWhite">DISCOVER NEWS ></a>
        </div>

        <div class="gray-container">
          <p>Get the news by email</p>
          <a href="https://headlines.psu.edu" class="custom-button-gray">DISCOVER NEWS ></a>
        </div>
      </div>
    </main>
  `;
}
}



customElements.define('my-project2', MyProject2);