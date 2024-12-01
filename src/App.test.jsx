import { describe, it, test, expect } from "vitest";
import { suma } from "./App.jsx";
describe("Algo verdadero o verdadero", () => {
    it("verdarero deberia ser verdadero", () => {
        expect(true).toBe(true);
        });
    it("falso debería ser falso", () => {
        expect(false).toBe(false);
        });
    });
describe("Test de suma", () => {
test("sumar 2+3", () => {
    expect(suma(2, 3)).toBe(5);
    });
});