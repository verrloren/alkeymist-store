import SearchTable from "@/components/navbar/search-table";
import SearchBar from "@/components/search-bar";
import { Container } from "@/components/ui/container";
import { Suspense } from "react";

interface SearchPageProps {
	searchParams: {
		query?: string;
	}
}

export default async function SearchPage({
	searchParams
}: SearchPageProps) {

	const query = searchParams?.query || "";

  return (
    <div className="relative bg-neutral-50 dark:bg-[#070707] min-h-[85dvh]">
      <Container>
				<div className="relative pt-8">
					<SearchBar />
				</div>
				<Suspense fallback={<div className="font-light text-lg mt-4 ml-4">Searching...</div>} key={query}>
					<SearchTable query={query} />
				</Suspense>
			</Container>
    </div>
  );
}
