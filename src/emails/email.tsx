import * as React from 'react';
import { Html, Heading } from "@react-email/components";



export function Email(p0: { firstName: any; }) {

  return (
    <Html lang="en">
			<Heading>Welcome!</Heading>
    </Html>
  );
}

export default Email;