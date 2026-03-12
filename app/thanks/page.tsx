import White from "./content/White";
import Black from "./content/Black";
import { getUserLayer } from "@/utils/get-user-layer";

export default async function Page() {
  const userLayer = await getUserLayer();
  const whiteContent = userLayer === 1;

  if (whiteContent) {
    return <White />;
  }

  return <Black />;
}
