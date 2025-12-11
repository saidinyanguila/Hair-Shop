import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const AboutHero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-4">
                <span className="inline-block text-sm font-medium text-primary tracking-widest uppercase">
                    About Us
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-6">
                    <img src="https://placehold.co/600x400" className="rounded shadow-md object-cover w-full h-full" />
                    <img src="https://placehold.co/600x400" className="rounded shadow-md object-cover w-full h-full" />
                    <img src="https://placehold.co/600x400" className="rounded shadow-md object-cover w-full h-full" />
                    <img src="https://placehold.co/600x400" className="rounded shadow-md object-cover w-full h-full" />
                </div>

                <div>
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-5">
                        <h1 className="font-display text-xl md:text-4xl font-semibold text-foreground">Welcome to</h1>
                        <Scissors className="h-8 w-8 text-primary" />
                        <span className="font-display text-xl md:text-4xl font-semibold text-foreground">
                            Luxe Hair
                        </span>
                    </div>

                    <p className="text-gray-600 mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam ameteos erat ipsum et lorem et sit, sed stet lorem sit.
                    </p>

                    <p className="text-gray-600 mb-6">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam ameteos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                    </p>

                    <div className="flex gap-12 mb-10">
                        <div className="flex items-start gap-3">
                            <span className="text-primary text-5xl font-bold">1</span>
                            <div className="text-sm uppercase tracking-wide">
                            <p className="font-semibold">Year of</p>
                            <p className="text-gray-800">Experience</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary text-5xl font-bold">5</span>
                            <div className="text-sm uppercase tracking-wide">
                            <p className="font-semibold">Trained</p>
                            <p className="text-gray-800">Stylists</p>
                            </div>
                        </div>
                    </div>

                    <Button variant="hero" className="w-full">
                        Book Appointment
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutHero;
