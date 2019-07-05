import React from "react";
import { shallow } from "enzyme";
import HeadLine from "../../HeadLine";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

// HOW TO TEST CLASS COMPONENTS WITH PROPS

describe("Headline Component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test HeadLine",
        desc: "Test Desc"
      };
      // pass props to setUp()
      component = setUp(props);
    });

    it("should render without errors", () => {
      const wrapper = component.find(".headlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = component.find(".header");
      expect(h1.length).toBe(1);
    });

    it("should render DESC", () => {
      const desc = component.find(".description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("should not render", () => {
      const wrapper = component.find(".headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
