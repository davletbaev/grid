import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import marked from 'marked';
import README from '../../README.md';
import './intro.css';
import 'github-markdown-css';

// const withDocs = withInfo(rm);

// storiesOf(`Introduction`).add(
//     'Getting started',
//     withDocs(() => <p>Hello World</p>)
// );

// console.log(css);

storiesOf(`Introduction`, module).add('Getting started', () => (
    <div className="markdown-body">
        {/* <link href={css} rel="stylesheet" /> */}
        <div dangerouslySetInnerHTML={{ __html: marked(README) }} />
    </div>
));
