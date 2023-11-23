import React from "react";
import { StyleLink } from "@/components/link";
import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className="mt-40">
      <Container>
        <p>
          {" enes demir"}
          <StyleLink href="#">
          </StyleLink>{" "}
          .
        </p>
      </Container>
    </footer>
  );
}
