import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

const StiledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Card = styled.div`
  background-color: lightgrey;
  gap: 10px;
  width: 30%;
  border-radius: 4px;
  padding: 15px;
  gap: 20px;
  margin: 15px;
`;

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Card>
      <h1>{data.name}</h1>
      <p>
        <strong>Description</strong>: {data.description}
      </p>
      <p>
        <strong>Price:</strong> {data.price} {data.currency}
      </p>
      <p>
        <strong>Category:</strong> {data.category}
      </p>
    </Card>
  );
}
