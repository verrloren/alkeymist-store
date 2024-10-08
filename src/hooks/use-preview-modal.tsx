import { Product } from "@/types/types";
import { create } from "zustand";

interface PrewiewModalStore {
	isOpen: boolean;
	data?: Product;
	onOpen: (data: Product) => void;
	onClose: () => void;
}

const usePreviewModal = create<PrewiewModalStore>((set) => ({
	isOpen: false,
	data:	undefined,
	onOpen: (data: Product) => set({ data, isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal;