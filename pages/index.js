import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>

      <Link href="/team" passHref>
        <Anchor>This is our team</Anchor>
      </Link>
    </>
  );
}

const Anchor = styled.a`
  text-decoration: none;
  color: berry;
  font-weight: bold;
`;
