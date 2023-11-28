import { html } from 'lit';
import '../src/my-project2.js';

export default {
  title: 'MyProject2',
  component: 'my-project2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-project2
      style="--my-project2-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-project2>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
