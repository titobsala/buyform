"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Results() {
  const [fashionProfile, setFashionProfile] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // In a real application, you would use the answers from the assessment
    // to generate the fashion profile and suggestions
    setFashionProfile('Casual Chic');
    setSuggestions([
      { look: 'Relaxed jeans with a crisp white t-shirt and sneakers', buyLink: 'https://example.com/casual-look' },
      { look: 'Flowy summer dress with sandals', buyLink: 'https://example.com/summer-dress' },
      { look: 'Tailored blazer with slim-fit pants and loafers', buyLink: 'https://example.com/smart-casual' },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Fashion Profile</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Style: {fashionProfile}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Based on your preferences, we've identified your style as {fashionProfile}. This style is characterized by a balance of comfort and elegance, perfect for various occasions.</p>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Suggested Looks</h2>
      {suggestions.map((suggestion, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>Look {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{suggestion.look}</p>
            <Link href={suggestion.buyLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2">Where to Buy</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
      <Link href="/assessment">
        <Button variant="outline" className="mt-4">Retake Assessment</Button>
      </Link>
    </div>
  );
}