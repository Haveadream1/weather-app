import { describe, it, expect, jest } from "@jest/globals";
import { getWeatherIcons } from "../dom_handler";

// As the getWeather function is dependent to the icon mapping, we mock the function 
jest.mock("../utils/weather_icons", () => ({
    __esModule: true,
    default: {
        1000: { day: "clearDay", night: "clearDay" },
        1003: { day: "partlyCloudyDay", night: "partlyCloudyNight" },
    },
}));

describe("getWeatherIcons", () => {
    it("returns Clear for the condition code 1000", () => {
        expect(getWeatherIcons(1, 1000)).toBe("clearDay");
    });

    it("returns day or night icon depending of daytime", () => {
        expect(getWeatherIcons(1, 1003)).toBe("partlyCloudyDay");
        expect(getWeatherIcons(0, 1003)).toBe("partlyCloudyNight");
    })
})
