import { classNames } from "./classNames";

describe("classNames", () => {
  test("With only one class", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("With additional class", () => {
    const additionalClasses = "additionalClass someClass";
    expect(classNames("someClass", {}, [additionalClasses])).toBe(
      `someClass ${additionalClasses}`
    );
  });

  test("With mods", () => {
    expect(classNames("someClass", { hovered: true, scrollable: true })).toBe(
      `someClass hovered scrollable`
    );
  });

  test("With mods. One of them is false", () => {
    expect(classNames("someClass", { hovered: true, scrollable: false })).toBe(
      `someClass hovered`
    );
  });
  test("With mods. One of them is undefined", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined })
    ).toBe(`someClass hovered`);
  });
});
