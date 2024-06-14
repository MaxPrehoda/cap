/*import { Stripe } from "Stripe";
import { redirect } from "@sveltejs/kit";

const stripe = new Stripe("sk_test");

export async function load() {}

/*
checkout: async ({ locals, request }) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1OhbZ4AgGZYlcp7ia59OLLut",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: "http://localhost:5173/success/{CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/",
    });

    if (session.url) {
      redirect(303, session.url);
    } else {
      throw new Error("Stripe Checkout session URL is missing");
    }
  },*/
