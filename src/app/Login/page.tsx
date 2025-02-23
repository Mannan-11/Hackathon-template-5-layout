import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Blog from '../Blog/page'

const Payment = () => {
    return (
        <div>

            <SignedOut>
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <SignInButton>
                        <button
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                        >
                            Sign In
                        </button>
                    </SignInButton>
                </div>
            </SignedOut>
            <SignedIn>
                <div className="flex items-center justify-end p-4 bg-gray-50 shadow">
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonTrigger:
                                    "px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition",
                            },
                        }}
                    />
                </div>
            </SignedIn>
            <Blog />
        </div>
    )
}

export default Payment