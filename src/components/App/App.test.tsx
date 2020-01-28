import * as React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import App from ".";

describe("App", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders as expected", () => {
    expect(component).toMatchSnapshot();
  });
});
