const User = require("../lab2");

describe("User Class", () => {
  let user;

  beforeEach(() => {
    user = new User("Hagar", "123456789");
  });

  describe("addToCart", () => {
    it("should add a product to the cart", () => {
      const product = { name: "Phone", price: 3500 };
      user.addToCart(product);
      expect(user.cart.length).toBe(1);
      expect(user.cart[0]).toEqual(product);
    });
  });

  describe("calculateTotalCartPrice", () => {
    it("should return 0 if cart is empty", () => {
      expect(user.calculateTotalCartPrice()).toBe(0);
    });

    it("should calculate total price of products in cart", () => {
      user.addToCart({ name: "Item1", price: 100 });
      user.addToCart({ name: "Item2", price: 200 });
      user.addToCart({ name: "Item3", price: 150 });

      expect(user.calculateTotalCartPrice()).toBe(450);
    });
  });

  describe("checkout", () => {
    it("should call all paymentModel methods", () => {
      const mockPaymentModel = {
        goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
        returnBack: jasmine.createSpy("returnBack"),
        isVerify: jasmine.createSpy("isVerify").and.returnValue(true),
      };

      user.checkout(mockPaymentModel);

      expect(mockPaymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(mockPaymentModel.returnBack).toHaveBeenCalled();
      expect(mockPaymentModel.isVerify).toHaveBeenCalled();
    });

    it("should return true if isVerify returns true", () => {
      const mockPaymentModel = {
        goToVerifyPage: () => {},
        returnBack: () => {},
        isVerify: () => true,
      };

      const result = user.checkout(mockPaymentModel);
      expect(result).toBeTrue();
    });

    it("should return false if isVerify returns false", () => {
      const mockPaymentModel = {
        goToVerifyPage: () => {},
        returnBack: () => {},
        isVerify: () => false,
      };

      const result = user.checkout(mockPaymentModel);
      expect(result).toBeFalse();
    });
  });
});
