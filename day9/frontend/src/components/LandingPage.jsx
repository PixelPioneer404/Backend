import { SignIn, SignInButton } from '@clerk/clerk-react'
import React from 'react'

const LandingPage = () => {
    return (
        <div className="w-full h-full bg-linear-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                    <h1 className="text-2xl font-bold text-white">NotesApp</h1>
                </div>

                <SignInButton>
                    <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Sign In
                    </button>
                </SignInButton>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center h-[calc(100%-88px)] px-4">
                <div className="text-center max-w-4xl">
                    <h2 className="text-6xl font-bold text-white mb-6 from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                        Welcome to NotesApp
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Organize your thoughts, capture your ideas, and keep track of everything that matters.
                        Sign in to start creating and managing your notes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Create & Edit</h3>
                            <p className="text-gray-400 text-sm">
                                Easily create and edit notes with a simple and intuitive interface
                            </p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Organize</h3>
                            <p className="text-gray-400 text-sm">
                                Keep all your notes organized and accessible from anywhere
                            </p>
                        </div>

                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                            <p className="text-gray-400 text-sm">
                                Your notes are secure and private, accessible only to you
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage
