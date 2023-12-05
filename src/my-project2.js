import { LitElement, html, css } from 'lit';

class MyProject2 extends LitElement {
  static properties = {
    link: { type: String },
    id: { type: String },
    type: { type: String },
  };

  static styles = css`
    .custom-button-container {
      text-align: center;
      margin-bottom: 20px;
    }

    .custom-button {
      display: inline-block;
      padding: 16px;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      color: #fff;
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    .custom-button.hovered {
      text-decoration: none;
      cursor: pointer;
    }

    .custom-button.blue {
      background-color: var(--blue-section-color, #001E44);
      border: 2px solid var(--blue-section-border-color, #ccf0ff);
    }

    .custom-button.blue.hovered {
      background-color: var(--blue-section-hover-color, #ccf0ff);
      color: var(--blue-section-text-color, #001E44);
      border: 2px solid var(--blue-section-hover-border-color, #ccf0ff);
    }

    .custom-button.white {
      background-color: var(--white-section-color, #fff);
      border: 2px solid var(--white-section-border-color, #1E407C);
      color: var(--white-section-text-color, #1E407C);
    }

    .custom-button.white.hovered {
      background-color: var(--white-section-hover-color, #1E407C);
      color: var(--white-section-hover-text-color, #fff);
    }

    .custom-button.gray {
      background-color: var(--gray-section-color, #5a7e9c);
      border: 2px solid var(--gray-section-border-color, #fff);
      color: var(--gray-section-text-color, #fff);
    }

    .custom-button.gray.hovered {
      background-color: var(--gray-section-hover-color, #5a7e9c);
      color: var(--gray-section-hover-text-color, #fff);
    }
  `;

  constructor() {
    super();
    this.addEventListener('mouseenter', this.addHoverStyles.bind(this));
    this.addEventListener('mouseleave', this.removeHoverStyles.bind(this));
  }

  addHoverStyles() {
    this.shadowRoot.querySelector('.custom-button').classList.add('hovered');
  }

  removeHoverStyles() {
    this.shadowRoot.querySelector('.custom-button').classList.remove('hovered');
  }

  render() {
    return html`
      <div class="custom-button-container">
        <p class="label">Get the news by email</p>
        <a
          id="${this.id}"
          href="${this.link}"
          class="custom-button ${this.type}"
        >
          DISCOVER NEWS >
        </a>
      </div>
    `;
  }
}

customElements.define('my-project2', MyProject2);