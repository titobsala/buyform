import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Fashion Profile Assessment</h1>
      <p className="text-xl mb-8 text-center">Discover your unique style and get personalized fashion suggestions!</p>
      <div className="flex justify-center">
        <Link href="/assessment">
          <Button size="lg">Start Assessment</Button>
        </Link>
      </div>
    </div>
  );
}