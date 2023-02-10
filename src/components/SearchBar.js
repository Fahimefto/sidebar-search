import React from "react";
import { Col, Content, FlexboxGrid, InputGroup, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import Multiselect from "multiselect-react-dropdown";

export default function SearchBar() {
  return (
    <>
      <Content
        style={{ padding: "0.5em", fontWeight: "bold", fontSize: "10px" }}
      >
        Country Selection
      </Content>
      <FlexboxGrid
        justify="space-between"
        align="middle"
        style={{
          border: "1px solid #46a7cd",
          borderRadius: "20px",
          padding: "0.2em",
        }}
      >
        <FlexboxGrid.Item colspan={20}>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            style={{
              searchBox: {
                border: "none",
              },
            }}
            options={[
              {
                cat: "Group 1",
                key: "Option 1",
              },
              {
                cat: "Group 1",
                key: "Option 2",
              },
              {
                cat: "Group 1",
                key: "Option 3",
              },
              {
                cat: "Group 2",
                key: "Option 4",
              },
              {
                cat: "Group 2",
                key: "Option 5",
              },
              {
                cat: "Group 2",
                key: "Option 6",
              },
              {
                cat: "Group 2",
                key: "Option 7",
              },
            ]}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item>
          <SearchIcon
            color="#46a7cd"
            placement="center"
            style={{
              fontSize: "1.5em",
            }}
          />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}
