import { redirect } from "next/navigation";
import { ResultType } from "@/lib/types";
import CardView from "./CardView";

interface Props {
  searchParams: Promise<{ type?: string; uid?: string }>;
}

const ALL_TYPES: ResultType[] = [
  "VISIONARY","MUSE","QUEEN","EXPLORER","CREATOR",
  "GARDEN","LIGHT","POET","CURATOR","BLOOM","DREAMER","FREE_SPIRIT"
];

export default async function CardPage({ searchParams }: Props) {
  const params = await searchParams;
  const type = params.type as ResultType | undefined;
  const uid = params.uid;

  if (!type || !ALL_TYPES.includes(type)) {
    redirect("/");
  }

  return (
    <main style={{ background: "#FAFAF8", minHeight: "100svh", padding: "3rem 1.5rem 2rem" }}>
      <CardView type={type} uid={uid} />
    </main>
  );
}
