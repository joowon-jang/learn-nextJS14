import { use } from "react";

export default function MovieDetail(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const { id } = params;
  return <h1>Movie {id}</h1>;
}
