import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account/useGetAccount';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const TestRoutePage = () => {
  const { address } = useGetAccount();
  return (
    <div className='my-5'>
     {address}
    </div>
  );
};

export const TestRoute = () => {
  return (
    <><div className='title'>
      <h1>This is a test</h1>
      <Button className="lg" title="This is a button ">Button name is Pula</Button> 
    </div><>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
        <TestRoutePage />
      </></>
  );
};


