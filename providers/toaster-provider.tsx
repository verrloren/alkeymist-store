'use client'
import { Toaster } from "react-hot-toast";


const ToasterProvider = () => {
	return <Toaster toastOptions={{
		style: {
			backgroundColor: '#101010dd',
      border: '1px solid #2e2e2e',
			backdropFilter: 'blur(24px)',
      padding: '16px',
      color: '#f5f5f5',
    },
	}} />;
};

export default ToasterProvider;
