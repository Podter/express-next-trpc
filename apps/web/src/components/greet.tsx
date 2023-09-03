import { trpc } from "@/lib/trpc";

interface Props {
  name?: string;
}

export default function Greet({ name }: Props) {
  const { data: helloData } = trpc.greet.hello.useQuery(name);
  const { data: byeData } = trpc.greet.bye.useQuery(name);

  if (!helloData || !byeData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p>{helloData}</p>
      <p>{byeData}</p>
    </div>
  );
}
