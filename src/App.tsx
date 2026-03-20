import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import DiscoveryBox from "./pages/DiscoveryBox";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SplashScreen>
            <DynamicBackground />
            <Navbar />
            <CartDrawer />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collection/:id" element={<CollectionPage />} />
                <Route path="/produit/:id" element={<ProductPage />} />
                <Route path="/coffret" element={<DiscoveryBox />} />
                <Route path="/histoire" element={<OurStory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </SplashScreen>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
