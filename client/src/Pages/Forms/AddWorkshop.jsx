
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';
import config from '../../config';

export default function AddWorkshop() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    
    // Append file
    if (data.banner && data.banner[0]) {
      formData.append('banner', data.banner[0]);
    }
    
    // Append other form fields
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('time', data.time);
    formData.append('location', data.location);
    formData.append('ageGroup', data.ageGroup);
    formData.append('language', data.language);
    formData.append('venueAddress', data.venueAddress);
  
    // Log formData to console before sending it to the server
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      const response = await axios.post(`${config.API_BASE_URL}/workshops`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Server response:', response.data);
      toast.success('Workshop added successfully!');
      reset();
    } catch (error) {
      console.error('Error adding workshop:', error);
      let errorMessage = 'Failed to add workshop. Please try again.';
      if (error.response && error.response.data) {
        errorMessage += ' Server says: ' + JSON.stringify(error.response.data);
      }
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Add New Workshop</CardTitle>
        <CardDescription className="text-gray-600">Fill in the details to create a new workshop</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="banner">Workshop Banner</Label>
            <Input type="file" id="banner" {...register('banner', { required: 'Banner is required' })} />
            {errors.banner && <p className="text-red-500">{errors.banner.message}</p>}
          </div>
          <div>
            <Label htmlFor="title">Workshop Title</Label>
            <Input id="title" {...register('title', { required: 'Title is required' })} />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input type="date" id="date" {...register('date', { required: 'Date is required' })} />
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}
          </div>
          <div>
            <Label htmlFor="time">Time</Label>
            <Input type="time" id="time" {...register('time', { required: 'Time is required' })} />
            {errors.time && <p className="text-red-500">{errors.time.message}</p>}
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register('location', { required: 'Location is required' })} />
            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
          </div>
          <div>
            <Label htmlFor="ageGroup">Age Group</Label>
            <Input id="ageGroup" {...register('ageGroup', { required: 'Age group is required' })} />
            {errors.ageGroup && <p className="text-red-500">{errors.ageGroup.message}</p>}
          </div>
          <div>
            <Label htmlFor="language">Language</Label>
            <Input id="language" {...register('language', { required: 'Language is required' })} />
            {errors.language && <p className="text-red-500">{errors.language.message}</p>}
          </div>
          <div>
            <Label htmlFor="venueAddress">Venue Address</Label>
            <Input id="venueAddress" {...register('venueAddress', { required: 'Venue address is required' })} />
            {errors.venueAddress && <p className="text-red-500">{errors.venueAddress.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Workshop...
              </>
            ) : (
              'Add Workshop'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}