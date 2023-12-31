import test from "ava";
import { assertHexDecimal, assertHexString, isObjectLike } from "../src/utils";
import { bytify } from "../src/bytes";

test("should assertHexString fail", (t) => {
  t.throws(() => assertHexString("00"));
  t.throws(() => assertHexString("0x01020304", 8));
});
test("should assertHexString pass", (t) => {
  t.notThrows(() => assertHexString("0x01020304", 4));
});
test("should assertHexDecimal fail", (t) => {
  t.throws(() => assertHexDecimal("0x"));
  t.throws(() => assertHexDecimal("0x123", 1));
  t.notThrows(() => assertHexDecimal("0x0"));
  t.notThrows(() => assertHexDecimal("0x12", 1));
});

function toNumberArray(x: Uint8Array | number[]): number[] {
  return Array.from(x);
}

test("should return the expected ArrayBuffer when calling toArrayBuffer()", (t) => {
  const testCase0 = new ArrayBuffer(1);
  const testCase1 = new Uint8Array([1, 2]);
  const testCase2 = "0x0304";
  const testCase3 = [1, 2, 3, 4];
  const testCase4 = { length: 8 };

  t.deepEqual(toNumberArray(bytify(testCase0)), [0]);
  t.deepEqual(toNumberArray(bytify(testCase1)), [1, 2]);
  t.deepEqual(toNumberArray(bytify(testCase2)), [3, 4]);
  t.deepEqual(toNumberArray(bytify(testCase3)), [1, 2, 3, 4]);
  t.throws(() => bytify(testCase4));
  t.throws(() => bytify([1, 256]));
});
test("should return expected value when calling isObjectLike()", (t) => {
  t.false(isObjectLike(undefined));
  t.true(isObjectLike({}));
});
