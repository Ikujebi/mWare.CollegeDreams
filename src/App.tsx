import LoginPage from "./page/LoginPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"
import CreateEvent from "./page/event/CreateEvent";
import AllEvent from "./page/event/AllEvent";
import Ayanfe from "./page/mark/Ayanfe";
import EventLayout from "./layout/EventLayout";
import EventDetail from "./page/event/EventDetail";
import Ticket from "./page/event/Ticket";
import { ComingSoonGreeting } from "./page/ComingSoon";
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import { Toaster } from "react-hot-toast";
const handleNavItemClick = (content: string) => {
  console.log("Navigation item clicked:", content);
  // Add your logic here (e.g., updating state or navigating)
};
const route =createBrowserRouter([
  {
    path: "/",
    element:<LoginPage />,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/create",
    element:<CreateEvent />,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/all-event",
    element:<AllEvent />,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/event-overview",
    element:<EventLayout>
      <EventDetail />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/event-ticket",
    element:<EventLayout>
      <Ticket />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/coming-soon",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/register-form",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/checkin",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/communication",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/guests",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/summary",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/event-analytics",
    element:<EventLayout>
      <ComingSoonGreeting />
    </EventLayout>,
    // errorElement:<FallbackRender/>
  },
  {
    path: "/ayanfe",
    element:
      <Ayanfe onNavItemClick={handleNavItemClick}/>
    ,
    // errorElement:<FallbackRender/>
  },
  
])

const queryClient = new QueryClient()
function App() {
  // const scret ='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';
  return  <GoogleOAuthProvider
    clientId="556023809895-8kvcfjgupktdubogh0qond4jakk89qni.apps.googleusercontent.com"
  >
  <QueryClientProvider client={queryClient}>
   <div>
   <Toaster />

<RouterProvider router={route} />
   </div>
</QueryClientProvider> 
  
</GoogleOAuthProvider>
}

export default App
