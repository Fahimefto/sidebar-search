import React from "react";
import { AutoComplete, Content, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

export default function SearchBar() {
  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Louisa",
    "Lester",
    "Lola",
    "Lydia",
    "Hal",
    "Hannah",
    "Harriet",
    "Hattie",
    "Hazel",
    "Hilda",
  ];

  return (
    <>
      <Content
        style={{ padding: "0.5em", fontWeight: "bold", fontSize: "10px" }}
      >
        Country Selection
      </Content>
      <InputGroup
        style={{
          marginTop: "0.5em",
          borderRadius: "5em",
          overflow: "hidden",
          border: "1px solid #46a7cd",
        }}
      >
        <AutoComplete data={data} block placeholder="Type Country Name" />

        <SearchIcon
          color="#46a7cd"
          placement="center"
          style={{
            fontSize: "1.5em",
            placeItems: "center",
            alignItems: "center",
            margin: "0.20em",
            marginInlineEnd: "0.5em",
          }}
        />
      </InputGroup>
    </>
  );
}
