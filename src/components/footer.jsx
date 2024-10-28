import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="max-w-4xl w-full mt-32 bg-slate-50 p-5 rounded-t-xl flex flex-col items-center">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl italic font-medium" style={{ fontFamily: "Instrument Serif" }}>Kamal el haddadi</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 md:mb-0">
                        <p className="flex items-center mb-2 sm:mb-0">
                            <Phone className="h-4 w-4 mr-2" />
                            <a href="tel:0649429683" className="hover:underline">(+212) 649429683</a>
                        </p>
                        <p className="flex items-center justify-center md:justify-end">
                            <Mail className="h-4 w-4 mr-2" />
                            <a href="mailto:kamal@example.com" className="hover:underline">kamal.el.haddaadi@gmial.com</a>
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Kamal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}