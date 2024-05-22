import { Billboard as BillboardType } from "@/types/types"

interface BillboardProps {
	data: BillboardType
}

export default function Billboard({ data }: BillboardProps) {


	return (
		<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
			<div
				style={{ backgroundImage: `url(${data?.imageUrl})` }}
				className="rounded-xl relative aspect-square sm:aspect-[2.4/1] overflow-hidden
					bg-cover bg-center bg-no-repeat"
			>
				<div className="h-full w-full flex flex-col 
					justify-center items-center text-center gap-y-8"
				>
					<div className="font-bold text-3xl sm:text-5xl 
						lg:text-6xl sm:max-w-xl max-w-xs text-white"
					>
						{data.label}
					</div>
				</div>
			</div>
		</div>
	)
}
