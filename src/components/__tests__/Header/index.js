import React from "react";
import { shallow } from "enzyme";
import Header from "../../Header";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("It should render without errors", () => {
  it("should render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".headerComponent");

    expect(wrapper.length).toBe(1);
  });
});
