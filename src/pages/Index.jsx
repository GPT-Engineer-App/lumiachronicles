import { useState } from 'react';
import { Lotus, Feather, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MeditationChart from '@/components/MeditationChart';

const Index = () => {
  const [activeTab, setActiveTab] = useState('meditate');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 mb-4">Luxe Serenity</h1>
        <p className="text-xl text-indigo-700">Discover the perfect balance of opulence and inner peace</p>
      </header>

      <div className="w-full max-w-4xl">
        <div className="flex justify-center mb-8">
          <Button
            variant={activeTab === 'meditate' ? 'default' : 'outline'}
            className="mr-4"
            onClick={() => setActiveTab('meditate')}
          >
            <Lotus className="mr-2 h-4 w-4" /> Meditate
          </Button>
          <Button
            variant={activeTab === 'relax' ? 'default' : 'outline'}
            className="mr-4"
            onClick={() => setActiveTab('relax')}
          >
            <Feather className="mr-2 h-4 w-4" /> Relax
          </Button>
          <Button
            variant={activeTab === 'indulge' ? 'default' : 'outline'}
            onClick={() => setActiveTab('indulge')}
          >
            <Sparkles className="mr-2 h-4 w-4" /> Indulge
          </Button>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-6">
            {activeTab === 'meditate' && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Guided Meditation</h2>
                <p className="text-indigo-600 mb-6">Immerse yourself in tranquility with our premium guided meditations.</p>
                <MeditationChart />
                <p className="text-indigo-600 my-4">Track your meditation progress throughout the week.</p>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Begin Your Journey</Button>
              </div>
            )}
            {activeTab === 'relax' && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Luxury Relaxation</h2>
                <p className="text-indigo-600 mb-6">Unwind in our exquisite relaxation lounges designed for ultimate comfort.</p>
                <img src="/placeholder.svg" alt="Relaxation lounge" className="mx-auto object-cover w-full h-[300px] rounded-lg mb-6" />
                <Button className="bg-indigo-600 hover:bg-indigo-700">Reserve Your Space</Button>
              </div>
            )}
            {activeTab === 'indulge' && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Opulent Experiences</h2>
                <p className="text-indigo-600 mb-6">Treat yourself to our curated selection of lavish wellness treatments.</p>
                <img src="/placeholder.svg" alt="Luxury spa treatment" className="mx-auto object-cover w-full h-[300px] rounded-lg mb-6" />
                <Button className="bg-indigo-600 hover:bg-indigo-700">Explore Treatments</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <footer className="mt-12 text-center text-indigo-600">
        <p>&copy; 2024 Luxe Serenity. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
