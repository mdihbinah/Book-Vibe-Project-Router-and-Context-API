import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="text-center max-w-lg">
                
                {/* Big Error Code */}
                <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition duration-300 shadow-lg"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative Glow */}
                <div className="mt-10 w-32 h-1 bg-red-500 mx-auto rounded-full blur-sm opacity-70"></div>
            </div>
        </div>
    );
};

export default ErrorPage;