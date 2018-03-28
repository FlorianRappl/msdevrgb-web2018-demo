import * as React from 'react';
import { render } from 'react-dom';
import { HelloComponent } from './hello';

const container = document.body;
render(<HelloComponent initialName="Florian" />, container);
