import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-green-700">Samarooh</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
          <Button variant="contained" color="success">Log Out</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-green-200 to-green-100">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          Celebrate Together, Manage with Ease
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          A modern platform to simplify dairy collection and community celebrations.
        </p>
        <div className="mt-6 space-x-4">
          <Button variant="contained" color="success">Get Started</Button>
          <Button variant="outlined" color="success">Learn More</Button>
        </div>
      </header>
    </div>
  );
}
