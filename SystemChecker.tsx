
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@card';
import { Button } from '@button';
import { Textarea } from '@textarea';
import { Badge } from '@badge';
import { Progress } from '@progress';
import { AlertTriangle, Brain, Clock, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription } from '@alert';
import { useToast } from '@use-toast';


interface SymptomCheckerProps {
  onAnalysisComplete: (result: any) => void;
  onNavigateToDoctor: () => void;
}

export const SymptomChecker = ({ onAnalysisComplete, onNavigateToDoctor }: SymptomCheckerProps) => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const { toast } = useToast();

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Sore throat',
    'Back pain', 'Stomach pain', 'Dizziness', 'Chest pain'
  ];

  const addSymptom = (symptom: string) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms(prev => prev ? `${prev}, ${symptom}` : symptom);
    }
  };

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      toast({
        title: "Please describe your symptoms",
        description: "Enter your symptoms to get an AI analysis",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        symptoms: symptoms,
        severity: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'moderate' : 'low',
        conditions: [
          { name: 'Common Cold', probability: 75, description: 'Viral upper respiratory infection' },
          { name: 'Seasonal Allergies', probability: 60, description: 'Allergic reaction to environmental factors' },
          { name: 'Stress/Anxiety', probability: 40, description: 'Physical symptoms related to stress' }
        ],
        recommendations: [
          'Rest and stay hydrated',
          'Monitor symptoms for 24-48 hours',
          'Consider over-the-counter medications',
          'Consult a healthcare provider if symptoms worsen'
        ],
        urgency: Math.random() > 0.8 ? 'immediate' : 'routine'
      };
      
      setAnalysis(mockAnalysis);
      onAnalysisComplete(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Symptom Analysis</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Describe your symptoms and get intelligent insights powered by advanced AI healthcare models
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Describe Your Symptoms</span>
            </CardTitle>
            <CardDescription>
              Be as detailed as possible. Include when symptoms started, their intensity, and any relevant context.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Example: I've had a persistent headache for 2 days, along with mild fever and fatigue. The headache gets worse in bright light..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-32 resize-none"
            />
            
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Common symptoms (click to add):</p>
              <div className="flex flex-wrap gap-2">
                {commonSymptoms.map((symptom) => (
                  <Badge
                    key={symptom}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => addSymptom(symptom)}
                  >
                    {symptom}
                  </Badge>
                ))}
              </div>
            </div>

            <Button 
              onClick={analyzeSymptoms} 
              disabled={isAnalyzing}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Symptoms...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze Symptoms
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {analysis && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Analysis Results</span>
                </span>
                <Badge className={getSeverityColor(analysis.severity)}>
                  {analysis.severity.toUpperCase()} SEVERITY
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysis.urgency === 'immediate' && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Based on your symptoms, consider seeking immediate medical attention.
                  </AlertDescription>
                </Alert>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Possible Conditions:</h4>
                <div className="space-y-3">
                  {analysis.conditions.map((condition, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-gray-900">{condition.name}</h5>
                        <span className="text-sm font-medium text-blue-600">{condition.probability}%</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{condition.description}</p>
                      <Progress value={condition.probability} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
                <ul className="space-y-1">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <Button 
                  onClick={onNavigateToDoctor}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Find Recommended Doctors
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );

};
