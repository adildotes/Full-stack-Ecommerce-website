import Users from "../models/userSchema.js";
import Products from "../models/productSchema.js";
import dotenv from "dotenv";
dotenv.config();

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  console.log(productId, quantity);
  const userId = req.userId; 
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await Users.findById(userId);

    // Check if the product already exists in the cart
    const cartItemIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );
    if (cartItemIndex > -1) {
      // If product exists, update the quantity
      user.cart[cartItemIndex].quantity += quantity;
    } else {
      // Otherwise, add the product to the cart
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Remove a product from the cart
const removeFromCart = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const user = await Users.findById(userId);

    const productIndex = user.cart.findIndex((item) => item.product.toString() === id);

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Decrease the quantity of the product
    user.cart[productIndex].quantity -= 1;

    // If the quantity reaches 0, remove the product from the cart
    if (user.cart[productIndex].quantity <= 0) {
      user.cart.splice(productIndex, 1);
    }
    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get the user's cart
const getCart = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await Users.findById(userId).populate("cart.product"); // Populate product details
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export {
  addToCart,
  removeFromCart,
  getCart,
};
