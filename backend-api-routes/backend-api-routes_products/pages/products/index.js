import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());

const StiledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
  margin: 15px;
  list-style: none;
`;

const Card = styled.li`
  background-color: lightgrey;
  gap: 10px;
  width: 30%;
  border-radius: 4px;
  padding: 15px;
`;

const Name = styled.h1`
  padding: 15px;
  margin: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function AllProducts() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Name>All products</Name>
      <StiledList>
        {data.map((product) => (
          <Card key={product.id}>
            <h3>{product.name}</h3>
            <p>
              <strong>Description</strong>: {product.description}
            </p>
            <p>
              <strong>Price:</strong> {product.price} {product.currency}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <StyledLink href={`/products/${product.id}`}>More Info</StyledLink>
          </Card>
        ))}
      </StiledList>
    </div>
  );
}
