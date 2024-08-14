import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface jobs{
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string; // ISO 8601 date string 
    endDate: string;   // ISO 8601 date string
    deadline: string;  // ISO 8601 date string
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string; // ISO 8601 date string
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: string | null;
    perksAndBenefits: string | null;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    orgPrimaryPhone: string;
    orgEmail: string;
    average_rating: number;
    total_reviews: number;
}

export interface JobPosting {
    success: boolean;
    message: string;
    data: jobs[];
    errors: string[];
    count: number;
  }
  
  export interface JobPostById {
    success: boolean;
    message: string;
    data: jobs;
    errors: string[];
    count: number;
  }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com' }),
  endpoints: builder => ({
    getAllJobs: builder.query<JobPosting, void>({
      query: () => '/opportunities/search'
    }),
    getJob: builder.query<JobPostById, string>({
        query: (id) => `/opportunities/${id}`
    }),
    
    
  })
})

export const { useGetAllJobsQuery, useGetJobQuery } = apiSlice