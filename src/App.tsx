import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GalleryPage from "./pages/GalleryPage";
import About from "./pages/About";
import ServicePage from "./pages/Services";
import NotFound from "./pages/NotFound";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
		<Toaster />
		<Sonner />
		<PayPalScriptProvider options={{ "clientId": "AS1lo6PLQj7ka6tcTYiqpNEUUnWGHscclbFiv-KOMBcRkEdcV8lxAwrsJjngpoya22QZ3Cnc5vE7Xm09" }}>		
			<BrowserRouter basename="/Hair-Shop">
				<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/services" element={<ServicePage />} />
				<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</PayPalScriptProvider>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
