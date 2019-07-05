import React from "react";
import { shallow } from "enzyme";
import Footer from "../../Footer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("Footer Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = component.find(".footerComponent");
    expect(wrapper.length).toBe(1);
  });
});
