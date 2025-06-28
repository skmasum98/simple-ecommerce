import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
    </div>
  );
}
