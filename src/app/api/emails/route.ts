
import Email from "@/emails/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST (request: Request) {  
	
	const { email, firstName } = await request.json();
	console.log(email)
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: "Hi there, this is a test email from Resend",
    react: Email({ firstName })
  });
}