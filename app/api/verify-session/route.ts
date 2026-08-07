import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', {
  apiVersion: '2026-07-29.dahlia',
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      isPaid: session.payment_status === 'paid',
      customerEmail: session.customer_details?.email,
      customerName: session.customer_details?.name,
    });
  } catch (err: any) {
    console.error('Error verifying session:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred while verifying the session.' },
      { status: 500 }
    );
  }
}
