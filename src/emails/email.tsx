import * as React from 'react';
import { Html, Button, Heading } from "@react-email/components";

type EmailProps = {
	firstName: string;
};

export function Email({ firstName }: EmailProps ) {

  return (
    <Html lang="en">
			<Heading>Welcome, {firstName}!</Heading>
      <Button
				href='https://resend.dev'
				style={{ padding: "12px 20px"}}
			>
				Click me
			</Button>
    </Html>
  );
}

export default Email;