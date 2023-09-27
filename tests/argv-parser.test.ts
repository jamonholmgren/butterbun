import { expect, test } from "bun:test"
import { argvParser } from "bluebun"

test("argvParse with no args", () => {
  const command = "/something /else"
  const argv = command.split(" ")
  const result = argvParser(argv)
  expect(result).toEqual({
    fullpath: [],
    options: {},
  })
})

test("argvParse", () => {
  const command = "/something /else parse one --foo bar --baz=qux --hello one --skip-jamon --boom"
  const argv = command.split(" ")
  const result = argvParser(argv)
  expect(result).toEqual({
    fullpath: ["parse", "one"],
    options: {
      foo: "bar",
      baz: "qux",
      hello: "one",
      jamon: false,
      boom: true,
    },
  })
})

test("argvParse with errors", () => {
  const command = "/something /else parse one --foo bar -xyz --baz=qux --hello one --skip-jamon extra"
  const argv = command.split(" ")
  const result = argvParser(argv)
  expect(result).toEqual({
    fullpath: ["parse", "one"],
    options: {
      foo: "bar",
      baz: "qux",
      hello: "one",
      jamon: false,
      x: true,
      y: true,
      z: true,
    },
    // extra is ignored
  })
})
