import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Hello from "./Hello";

describe("Hello", () => {
  let rendered: ShallowWrapper;

  beforeEach(() => {
    rendered = shallow(<Hello name="mickey" />);
  });

  it("renders as expected", () => {
    expect(rendered).toMatchSnapshot();
  });
});
