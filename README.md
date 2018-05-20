# Kedux

## Installation

First install with `npm` or `yarn`:

```
yarn add kedux
npm install kedux --save
```

Then include the reducer with `kedux` key:

```javascript
import { combineReducers, createStore } from 'redux';
import { reducer as keduxReducer } from 'kedux';

const reducer = combineReducers({
  // Other reducers...
  kedux: keduxReducer
});

const store = createStore(reducer);

// Rest of the App
```

## Usage

Suppose you build a simple tabs page using component state:

```jsx harmony
import React from 'react';

const tabData = {
  'tab1': 'TAB 1 content',
  'tab2': 'TAB 2 content',
  'tab3': 'TAB 3 content'
};

export default class Tabs extends React.PureComponent {
  state = {
    activeKey: 'tab1'
  };

  handleChangeTab(value) {
    this.setState({ activeKey: value });
  }

  render() {
    const { activeKey } = this.state;
    const content = tabData[activeKey];

    return (
      <div id="tabs">
        <nav>
          {Object.keys(tabData).map((tabKey) => (
            <a key={tabKey} onClick={this.handleChangeTab.bind(this, tabKey)}>
              {tabKey}
            </a>
          ))}
        </nav>
        
        <div className="tab-content">
          {content}
        </div>
      </div>
    );
  }
}
```

Now you can rewrite previous code using kedux:

```jsx harmony
import React from 'react';
import PropTypes from 'prop-types';
import withKedux from 'kedux';

const tabData = {
  'tab1': 'TAB 1 content',
  'tab2': 'TAB 2 content',
  'tab3': 'TAB 3 content'
};

@withKedux({
  activeKey: { // Component-level name
    path: 'somePage/tabs/activeTabKey', // State-level name
    defaultValue: 'tab1' // Default value if store value is undefined
  }
  // Add as many as you want
})
export default class Tabs extends React.PureComponent {
  static propTypes = {
    activeKey: PropTypes.number,
    set: PropTypes.func
  };

  handleChangeTab(value) {
    // Dispatch action to set value to store
    // Use component-level name to set value
    this.props.set('activeKey', value);
  }

  render() {
    const { activeKey } = this.props;
    const content = tabData[activeKey];

    return (
      <div id="tabs">
        <nav>
          {Object.keys(tabData).map((tabKey) => (
            <a key={tabKey} onClick={this.handleChangeTab.bind(this, tabKey)}>
              {tabKey}
            </a>
          ))}
        </nav>
        
        <div className="tab-content">
          {content}
        </div>
      </div>
    );
  }
}
```

## API

In the above code, `activeKey` is component-level name of the data which will be passed to the component as props. Kedux state is in the following format:

```javascript
{
  "somePage/tabs/activeTabKey": {
    value: "tab1"
  },
  ...
}
```
