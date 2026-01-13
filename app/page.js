
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Server-side redirect - no JavaScript needed
  redirect('/order1');
}
