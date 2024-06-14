import { Stripe } from "stripe";
import { error, redirect } from "@sveltejs/kit";

export const actions = {
  subscribepro: async ({ locals, request }) => {
    const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1PQaJkAy7t1y2bsya3oBeFIA",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: "http://localhost:5173/success/{CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/",
    });

    if (!session) {
      throw error(500, "Something went wrong");
    } else if (session.url) {
      throw redirect(303, session.url);
    }
  },
};
