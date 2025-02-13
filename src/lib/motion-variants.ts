import { cubicBezier } from "framer-motion";

export const staggerContainer = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};
export const staggerItem = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: .4 } },
};
export const cubicBezierVariant =  cubicBezier(0.6, 0.05, -0.01, 0.9)