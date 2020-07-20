import React from "react";
import { shallow } from "enzyme";
import Header from "../../header";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  it("should render without errors", () => {
    const component = setUp();
    const wrapper = component.find(".headerComponent");

    expect(wrapper.length).toBe(1);
  });

  it("should have a logo", () => {
    const component = setUp();
    const wrapper = component.find(".logo");

    expect(wrapper.length).toBe(1);
  });
});
