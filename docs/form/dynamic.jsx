import React from 'react';
import { Form } from 'lzengpsula';

const initialSource = [
  {
    text: 'è¹æ ð',
    value: 'apple',
  },
  {
    text: 'æ¡å­ ð',
    value: 'peach',
  },
];

export default class DynamicDemo extends React.Component {
  ref = React.createRef();

  componentDidMount() {}

  render() {
    return (
      <Form
        ref={this.ref}
        layout="vertical"
        initialValues={{ radiogroup: 'peach' }}
        onFinish={(values) => {
          console.log('Success:', values);
        }}
        fields={[
          { name: 'input', label: 'å§å', field: 'input' },
          {
            name: 'users',
            label: 'å¨æä¿¡æ¯',
            isList: true,
            field: {
              type: 'dynamicfieldcomp',
              props: {
                fields: [
                  {
                    name: 'first',
                    rules: [{ required: true, message: 'Missing first name' }],
                    field: 'input',
                  },
                  {
                    name: 'last',
                    rules: [{ required: true, message: 'Missing last name' }],
                    field: 'input',
                  },
                ],
              },
            },
          },
          {
            label: ' ',
            colon: false,
            render: {
              type: 'button',
              props: {
                htmlType: 'submit',
                type: 'primary',
                children: 'submit',
              },
            },
          },
          {
            colon: false,
            render: {
              type: 'button',
              props: {
                onClick: () => {
                  this.ref.current.validateFields().then((values) => {
                    console.log('è¡¨åå¼: ', values);
                  });
                },
                children: 'apiæäº¤',
              },
            },
          },
        ]}
      />
    );
  }
}
