import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from '../HomePage';
import Homepage2 from '../HomePage2';
import Homepage3 from '../HomePage3';
import Homepage4 from '../HomePage4';
import AboutPage from '../AboutPage';
import ServicePage from '../ServicePage';
import ShopPage from '../ShopPage';
import ShopSinglePage from '../ShopSinglePage';
import ServiceSinglePage from '../ServiceSinglePage';
import EventPage from '../EventPage';
import EventPageSingle from '../EventPageSingle';
import DonatePage from '../DonatePage';
import BlogPage from '../BlogPage';
import BlogPageLeft from '../BlogPageLeft';
import BlogPageFullwidth from '../BlogPageFullwidth';
import BlogDetails from '../BlogDetails';
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide';
import BlogDetailsFull from '../BlogDetailsFull';
import ErrorPage from '../ErrorPage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';
import DashboardLayout from '../../dashboard/layout/DashboardLayout';
import DashboardHome from '../../dashboard/home/DashboardHome';
import UploadPdf from '../../dashboard/pages/UploadPdf';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/home',
    element: <Homepage />,
  },
  {
    path: '/home2',
    element: <Homepage2 />,
  },
  {
    path: '/home3',
    element: <Homepage3 />,
  },
  {
    path: '/home4',
    element: <Homepage4 />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/service',
    element: <ServicePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/shop-single',
    element: <ShopSinglePage />,
  },
  {
    path: '/service-single',
    element: <ServiceSinglePage />,
  },
  {
    path: '/event',
    element: <EventPage />,
  },
  {
    path: '/event-single',
    element: <EventPageSingle />,
  },
  {
    path: '/donate',
    element: <DonatePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog-left',
    element: <BlogPageLeft />,
  },
  {
    path: '/blog-fullwidth',
    element: <BlogPageFullwidth />,
  },
  {
    path: '/blog-details',
    element: <BlogDetails />,
  },
  {
    path: '/blog-details-left',
    element: <BlogDetailsLeftSiide />,
  },
  {
    path: '/blog-details-fullwidth',
    element: <BlogDetailsFull />,
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "upload-pdf",
        element: <UploadPdf />,
      },
    ],
  },
]);

const AllRoute = () => {
  return <RouterProvider router={router} />;
};

export default AllRoute;
