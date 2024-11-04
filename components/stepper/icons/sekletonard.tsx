import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonProfileUI = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-24" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {[
            'Myself',
            'MySon',
            'MyDaughter',
            'MyBrother',
            'MySister',
            'MyFriend',
            'MyRelative'
          ].map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </CardContent>
      <div className="mt-4 flex justify-end">
        <Skeleton className="h-8 w-16" />
      </div>
    </Card>
  );
};

export default SkeletonProfileUI;