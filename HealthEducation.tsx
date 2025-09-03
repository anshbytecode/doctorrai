
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Shield, Zap, Clock, User } from 'lucide-react';

export const HealthEducation = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Common Cold vs. Flu Symptoms",
      excerpt: "Learn to differentiate between cold and flu symptoms to make better health decisions.",
      category: "Symptoms",
      readTime: "5 min read",
      author: "Dr. Rahul Gandhi",
      publishDate: "Dec 28, 2024",
      featured: true
    },
    {
      id: 2,
      title: "When to Seek Emergency Medical Care",
      excerpt: "Critical warning signs that require immediate medical attention.",
      category: "Emergency Care",
      readTime: "3 min read",
      author: "Dr. Shah thoda rukh Khan",
      publishDate: "Dec 25, 2024",
      featured: true
    },
    {
      id: 3,
      title: "Managing Chronic Pain: A Comprehensive Guide",
      excerpt: "Evidence-based strategies for living with and managing chronic pain conditions.",
      category: "Pain Management",
      readTime: "8 min read",
      author: "Dr. Gabbar Bacchan",
      publishDate: "Dec 22, 2024",
      featured: false
    },
    {
      id: 4,
      title: "Heart Health: Prevention and Early Detection",
      excerpt: "Key lifestyle factors and warning signs for cardiovascular health.",
      category: "Cardiology",
      readTime: "6 min read",
      author: "Dr. Nirav Godi",
      publishDate: "Dec 20, 2024",
      featured: false
    },
    {
      id: 5,
      title: "Mental Health and Physical Symptoms",
      excerpt: "Understanding the connection between mental health and physical wellbeing.",
      category: "Mental Health",
      readTime: "7 min read",
      author: "Dr. Akshay Ambani ",
      publishDate: "Dec 18, 2024",
      featured: false
    },
    {
      id: 6,
      title: "Preventive Care: Your Health Maintenance Schedule",
      excerpt: "Essential screenings and checkups by age group and risk factors.",
      category: "Prevention",
      readTime: "4 min read",
      author: "Dr. MS cool",
      publishDate: "Dec 15, 2024",
      featured: false
    }
  ];

  const categories = [
    { name: "Symptoms", icon: Zap, color: "bg-yellow-100 text-yellow-800" },
    { name: "Emergency Care", icon: Shield, color: "bg-red-100 text-red-800" },
    { name: "Pain Management", icon: Heart, color: "bg-pink-100 text-pink-800" },
    { name: "Cardiology", icon: Heart, color: "bg-red-100 text-red-800" },
    { name: "Mental Health", icon: User, color: "bg-purple-100 text-purple-800" },
    { name: "Prevention", icon: Shield, color: "bg-green-100 text-green-800" }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-blue-100 text-blue-800";
  };

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Health Education Center</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with expert-reviewed health articles and educational resources
        </p>
      </div>

      <div className="grid gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.filter(article => article.featured).map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="group hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        <IconComponent className="mr-1 h-3 w-3" />
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.publishDate}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Articles</h3>
          <div className="grid gap-4">
            {articles.filter(article => !article.featured).map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="group hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <Badge className={getCategoryColor(article.category)} variant="outline">
                            <IconComponent className="mr-1 h-3 w-3" />
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="mr-1 h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-gray-600">{article.excerpt}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.publishDate}</span>
                        </div>
                      </div>
                      <div className="md:ml-6">
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Disclaimer</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The information provided in these articles is for educational purposes only and is not intended 
              to replace professional medical advice, diagnosis, or treatment. Always consult with qualified 
              healthcare providers for medical concerns and before making health-related decisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};