import { describe, it, expect} from "@jest/globals";
import { determineUvLabel } from "../dom_handler";

describe("getUvLabel", () => {
    it("returns Low for uv between 0 and 2", () => {
        expect(determineUvLabel(1)).toBe("Low");
    });

    it("returns in-between values correctly", () => {
        expect(determineUvLabel(3)).toBe("Moderate");
        expect(determineUvLabel(6)).toBe("High");
    })

    it("returns Extreme for uv above 10", () => {
        expect(determineUvLabel(11)).toBe("Extreme");
    });
})