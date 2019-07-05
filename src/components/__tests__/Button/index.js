import React from "react";
import { shallow } from "enzyme";
import Button from "../../Button";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// props = {} means that the empty {} would be passed to props if nothing is passed to props.
const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe("Button Component", () => {
  it("should simulate click event", () => {
    const component = setUp();
    expect(component.find(".click-0").length).toBe(0);

    component.find("a").simulate("click");
    expect(component.find(".clicks-1").length).toBe(1);
  });
});
