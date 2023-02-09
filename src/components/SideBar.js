import React from "react";
import { Container, Content, Sidebar } from "rsuite";
import SearchBar from "./SearchBar";

function SideBar() {
  return (
    <Container>
      <Sidebar
        style={{
          height: "200px",
          margin: "20px",
        }}
      >
        <SearchBar />
      </Sidebar>
      <Container></Container>
    </Container>
  );
}

export default SideBar;
