"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const questions = [
  {
    id: 'style',
    question: 'Which style best describes your preferred look?',
    options: ['Casual', 'Formal', 'Bohemian', 'Sporty', 'Vintage'],
  },
  {
    id: 'colors',
    question: 'What color palette do you prefer?',
    options: ['Neutral', 'Bright', 'Pastel', 'Dark', 'Monochrome'],
  },
  {
    id: 'occasion',
    question: 'What occasion do you most often dress for?',
    options: ['Work', 'Casual outings', 'Formal events', 'Outdoor activities', 'Night out'],
  },
];

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push('/results');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fashion Profile Assessment</h1>
      <div className="mb-6">
        <h2 className="text-xl mb-4">{questions[currentQuestion].question}</h2>
        <RadioGroup onValueChange={handleAnswer} value={answers[questions[currentQuestion].id]}>
          {questions[currentQuestion].options.map((option) => (
            <div className="flex items-center space-x-2 mb-2" key={option}>
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
        {currentQuestion < questions.length - 1 ? 'Next' : 'See Results'}
      </Button>
    </div>
  );
}