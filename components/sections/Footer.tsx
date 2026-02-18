import { PawPrint } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#3d3d3d] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <PawPrint className="w-8 h-8 text-[#d4a5a5]" />
                            <h3 className="text-xl">Two Tails Dog Care</h3>
                        </div>
                        <p className="text-gray-300">
                            Oneida & Janay<br />
                            Loving dog care by sisters
                        </p>
                    </div>

                    <div className="text-center">
                        <h4 className="mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Dog Walking</li>
                            <li>Drop-In Visits</li>
                            <li>House Sitting</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className="mb-4">Contact</h4>
                        <p className="text-gray-300">
                            hello@twotailscare.com<br />
                            (555) 123-4567<br />
                            @twotailscare
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Two Tails Dog Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
