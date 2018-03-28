import * as React from 'react';

const outputStyle = {
  fontSize: '3em',
  color: 'red'
};

export interface HelloComponentProps {
  initialName: string;
}

export interface HelloComponentState {
  name?: string;
}

export class HelloComponent extends React.Component<HelloComponentProps, HelloComponentState> {
  constructor(props: HelloComponentProps) {
    super(props);
    this.state = {};
  }

  private changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (name.length < 5) {
      this.setState({
        name,
      });
    }
  };

  render() {
    const { initialName } = this.props;
    const { name = '' } = this.state;
    const chosenName = this.state.name === undefined ? initialName : name;

    return (
      <div>
        <b>Your name please:</b>
        <div>
          <input value={name} onChange={this.changeInput} />
        </div>
        <output style={outputStyle}>
          Hello {chosenName}!
        </output>
      </div>
    );
  }
}
