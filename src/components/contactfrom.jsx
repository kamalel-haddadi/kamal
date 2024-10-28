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
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby3XqFoi-fYQRRz4LEIihB1tZcTU9y35E_UlkPRicpG0Wgd22J84tox6MLW5dD0eR-p7A/exec'

        try {
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                setSubmitMessage('Thank you for your message. We\'ll be in touch soon!')
                event.currentTarget.reset()
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
                            className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#ea5a0cef] text-white px-8 py-3 rounded-md transition-colors duration-200 disabled:opacity-50"
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
