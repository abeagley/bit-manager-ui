const email = require("./email")
// @ponicode
describe("email.default", () => {
    test("0", () => {
        let callFunction = () => {
            email.default("Sales", "elio@example.com", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            email.default("Chief Product Officer", "Elio", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            email.default("Software Engineer", "elio@example.com", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            email.default("Data Scientist", "elio@example.com", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            email.default("Chief Product Officer", "elio@example.com", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            email.default(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
