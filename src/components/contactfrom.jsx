'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        const formData = new FormData(event.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }

        // Replace this URL with your Google Apps Script web app URL
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxCYt3nvpX0ico7Q3Rmm1GgDRnyeC9SVpTYH82K6LI/dev'

        try {
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(data),
            })

            if (response.type === 'opaque') {
                setSubmitMessage('Thank you for your message. We\'ll be in touch soon!')
                event.target.reset()
            } else {
                setSubmitMessage('There was an error submitting the form. Please try again.')
            }
        } catch (error) {
            console.error('Error:', error)
            setSubmitMessage('There was an error submitting the form. Please try again.')
        }

        setIsSubmitting(false)
    }

    return (



        <div className="max-w-4xl w-full mx-auto">
            <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="">
                    <div className="">
                        <h3 className="text-lg text-[#1d1d1f] font-medium" style={{ fontFamily: "Archivo" }}>Contact</h3>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="block text-md font-normal text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your first and last name"
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none rounded-md"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-md font-normal text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john@doe.com"
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none rounded-md"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="block text-md font-normal text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Enter your message..."
                                className="w-full min-h-[150px] px-4 py-2 border focus:outline-none border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700  disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    {submitMessage && (
                        <p className={`mt-4 ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                            {submitMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
