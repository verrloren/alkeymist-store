export interface Billboard {
	id: string;
	label: string;
	imageUrl: string;
}
export interface Category {
	id: string;
	name: string;
	billboard: Billboard;
}

export interface Product {
	id: string;
	category: Category;
	name: string;
	price: string;
	newprice: string;
	isFeatured: boolean;
	onCarousel: boolean;
	onSale: boolean;

	size: Size;
	images: Image[];
}

export interface Image {
	id: string;
	url: string;
}

export interface Size {
	id: string;
	name: string;
	url: string;
	value: string
}
